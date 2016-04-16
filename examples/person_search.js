'use strict'
const KGSearch = require('./index')
const kGraph = KGSearch(process.env.KGSEARCH_API_KEY)

/*

  * Query parameters reference:
  https://developers.google.com/knowledge-graph/reference/rest/v1/

*/

let params = {
  query: 'Taylor Swift',
  types: 'Person',
  limit: 1
}

kGraph.search(params, (err, items) => {
  if (err) console.error(err)
  console.log(items)
})

/*

  * Sample response:
  [
    {
      '@type': 'EntitySearchResult',
      result: {
        '@id': 'kg:/m/0dl567',
        name: 'Taylor Swift',
        '@type': ['Person', 'Thing'],
        description: 'Singer-songwriter',
        image: {
          contentUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcTyWfbzdVAuHbyFXT1S-pWGn589RVIgusMedX8iHg-SX_WGKYaB",
          url: "https://en.wikipedia.org/wiki/Taylor_Swift",
          license: "http://creativecommons.org/licenses/by-sa/3.0"
        },
        detailedDescription: {
          articleBody: "Taylor Alison Swift is an American singer-songwriter. Raised in Wyomissing, Pennsylvania, she moved to Nashville, Tennessee, at the age of 14 to pursue a career in country music. ",
          url: "http://en.wikipedia.org/wiki/Taylor_Swift",
          license: "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
        },
        url: 'http://www.taylorswift.com/'
      },
      resultScore: 280.279816
    }
  ]

*/
