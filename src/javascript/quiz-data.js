import Airtable from 'airtable'

const token =
  'patd2wiwzbVK3lWvz.a78294c47d622efa508bc74c9add5e0c7dbeeaa8098034c655afa7815950e25f'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
const base = Airtable.base('appZHHrH4PFKJs8gA')

function getQuizCards() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Quiz')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            name: record.fields['Name'],
            category: record.fields['Category'],
            place: record.fields['Place'],
            mood: record.fields['Mood'],
            character: record.fields['Character'],
            image: record.fields['Image'],
            link: record.fields['Link']
          })
        })

        resolve(content)
      })
  })
}

export { getQuizCards }
