import { v4 as uuidv4 } from 'uuid'

const releaseNotes = [
  {
    id: uuidv4(),
    version: '1.0.0',
    description: 'Initial release',
    news: [
      {
        id: uuidv4(),
        title: 'About This Mac application',
        description:
          'The About This Mac app shows key details about your Mac, like the macOS version, model, processor, memory, storage.',
      },
      {
        id: uuidv4(),
        title: 'System Settings application',
        description:
          'Manage your overall setup and preferences for Mac, such as software updates, device language, and more.',
      },
    ],
    bugs: [],
  },
]

export { releaseNotes }
