/* eslint-disable @typescript-eslint/no-explicit-any */
import { ELocale } from '@/constants'
import data from './languages.json'
import fs from 'fs'
import path from 'path'
import { translate, TranslationResult } from 'bing-translate-api'

type TLanguage = {
  value: string
  name: string
  supported: boolean
}

const targetLocale = ELocale.EN

const reorderKeys = (sourceContent: any, targetContent: any) => {
  const reordered: Record<string, any> = {}
  for (const key of Object.keys(sourceContent)) {
    if (key in targetContent) {
      const refValue = sourceContent[key]
      const targetValue = targetContent[key]
      if (
        typeof refValue === 'object' &&
        typeof targetValue === 'object' &&
        refValue !== null &&
        targetValue !== null &&
        !Array.isArray(refValue)
      ) {
        // Recursively reorder nested objects
        reordered[key] = reorderKeys(refValue, targetValue)
      } else {
        reordered[key] = targetValue
      }
    }
  }
  return reordered
}

const translateDeeply = async (sourceContent: any, targetContent: any, toLanguage: string) => {
  await Promise.all(
    Object.keys(sourceContent).map(async (key: string) => {
      // Check updated key
      let updatedTranslation = ''
      if (typeof sourceContent[key] === 'string') {
        const { translation } = (await translate(
          sourceContent[key],
          null,
          toLanguage,
        )) as TranslationResult
        updatedTranslation = translation
      }

      if (
        targetContent?.[key] === undefined ||
        (updatedTranslation && targetContent?.[key] !== updatedTranslation)
      ) {
        if (typeof sourceContent[key] === 'object') {
          targetContent[key] = {}
          await translateDeeply(sourceContent[key], targetContent[key], toLanguage)
        } else {
          const { translation } = (await translate(
            sourceContent[key],
            null,
            toLanguage,
          )) as TranslationResult

          if (targetContent?.[key] !== translation) {
            targetContent[key] = translation
          }
        }
      } else if (typeof sourceContent[key] === 'object') {
        targetContent[key] = targetContent?.[key] || {}
        await translateDeeply(sourceContent[key], targetContent?.[key], toLanguage)
      }
    }),
  )
}

const autoGen = () => {
  const sourceDir = path.join(__dirname, `../../locales/${targetLocale}`)
  const sourceFiles = fs.readdirSync(sourceDir)

  sourceFiles.forEach((file) => {
    const filePath = path.join(sourceDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const sourceContent = JSON.parse(fileContent)

    data.languages
      .filter((language: TLanguage) => language.value !== targetLocale)
      .map(async (language: TLanguage) => {
        const targetFolderPath = path.join(__dirname, '../../locales', language.value)
        const targetFilePath = path.join(targetFolderPath, file)

        // Create the folder if it doesn't exist
        if (!fs.existsSync(targetFolderPath)) {
          fs.mkdirSync(targetFolderPath, { recursive: true })
          console.log(`INFO: Create folder that does not exist: ${targetFolderPath}`)
        }

        // Create the file if it doesn't exist
        if (!fs.existsSync(targetFilePath)) {
          fs.writeFileSync(targetFilePath, '{}')
          console.log(`INFO: Create file that does not exist: ${targetFilePath}`)
        }

        const targetFileContent = fs.readFileSync(targetFilePath, 'utf-8')
        const targetContent = JSON.parse(targetFileContent)

        // Translate deeply missing keys
        await translateDeeply(sourceContent, targetContent, language.value)

        fs.writeFileSync(
          targetFilePath,
          JSON.stringify(reorderKeys(sourceContent, targetContent), null, 2),
        )
      })
  })
}

const main = () => {
  autoGen()
}

main()
