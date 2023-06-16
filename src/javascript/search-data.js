import Airtable from 'airtable'

const token =
  'patd2wiwzbVK3lWvz.a78294c47d622efa508bc74c9add5e0c7dbeeaa8098034c655afa7815950e25f'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
const base = Airtable.base('app01KNDrzVa26N5e')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Post Teaser')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: record.fields['Title'],
            section: record.fields['Section'],
            category: record.fields['Category'],
            type: record.fields['Type'],
            link: record.fields['Link']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
