import { releaseNotes } from '@/constants'
import Layout from '../layout'
import { ChevronRight, GitCompareArrows, HardDrive } from 'lucide-react'
import { memo, useState } from 'react'
import { useTranslations } from 'next-intl'

const General = () => {
  const t = useTranslations()

  const [showAbout, setShowAbout] = useState<boolean>(false)
  const [showSoftwareUpdates, setShowSoftwareUpdates] = useState<boolean>(false)

  return (
    <Layout>
      {!showAbout && !showSoftwareUpdates && (
        <>
          <div className="border-alabaster-300/30 bg-alabaster-200/25 mt-2 rounded-sm border p-2">
            <div className="text-center text-xl font-bold">
              {t('system_settings.label.general')}
            </div>
            <div className="text-alabaster-400 text-center text-xs">
              {t('system_settings.note.general')}
            </div>
          </div>

          <div className="border-alabaster-300/30 bg-alabaster-200/25 mt-2 flex cursor-pointer flex-col gap-2 rounded-sm border p-2">
            <div className="flex items-center justify-between" onClick={() => setShowAbout(true)}>
              <div className="flex items-center gap-2">
                <HardDrive size={20} />
                <div className="text-sm">{t('system_settings.label.about')}</div>
              </div>
              <ChevronRight size={16} className="text-alabaster-400" />
            </div>

            <div className="border-alabaster-300/30 border-t"></div>

            <div
              className="flex items-center justify-between"
              onClick={() => setShowSoftwareUpdates(true)}
            >
              <div className="flex items-center gap-2">
                <GitCompareArrows size={20} />
                <div className="text-sm">{t('system_settings.label.software_updates')}</div>
              </div>
              <ChevronRight size={16} className="text-alabaster-400" />
            </div>
          </div>
        </>
      )}

      {showAbout && (
        <div>
          <div className="text-center text-xl font-bold">{t('system_settings.label.about')}</div>
          <div className="text-alabaster-400 text-center text-xs">
            {t('system_settings.note.about')}
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold">{t('system_settings.label.version')}</div>
            <div className="text-alabaster-400 mt-1 text-xs">
              {t('system_settings.note.version')}
            </div>
            <div className="mt-2 text-sm font-semibold">
              {t('system_settings.label.description')}
            </div>
            <div className="text-alabaster-400 mt-1 text-xs">
              {t('system_settings.note.description')}
            </div>
          </div>
        </div>
      )}

      {showSoftwareUpdates && (
        <div>
          {releaseNotes.map((note) => (
            <div key={note.id}>
              <div className="text-xl font-medium">
                {t('system_settings.label.release_version', {
                  version: note.version,
                })}
              </div>
              <div className="text-alabaster-500 text-sm">{note.description}</div>
              <div className="my-2 font-medium">{t('system_settings.label.whats_new')}</div>
              <ul className="text-alabaster-500 flex flex-col gap-1 text-sm">
                {note.news.map((item) => (
                  <li key={item.id}>
                    {t.rich('system_settings.label.new_item', {
                      title: item.title,
                      description: item.description,
                      strong: (chunk) => <strong>{chunk}</strong>,
                    })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export default memo(General)
