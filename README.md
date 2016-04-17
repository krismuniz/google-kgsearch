# google-kgsearch
[![Code-Style:Standard](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](http://standardjs.com/)
[![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

`google-kgsearch` is a wrapper for [Google's Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). It is lightweight, simple, and easy to understand.

**About Google's Knowledge Graph Search API**:
> The Knowledge Graph Search API lets you find entities in the [Google Knowledge Graph](https://www.google.com/intl/bn/insidesearch/features/search/knowledge.html). The API uses standard [schema.org](http://schema.org/) types and is compliant with the [JSON-LD](http://json-ld.org/) specification.

*An excerpt from: https://developers.google.com/knowledge-graph/*

## Use cases

Some examples of how you can use the Knowledge Graph Search API include:

* Getting relevant information about a specific entity when doing Natural Language Processing
* Getting a ranked list of the most notable entities that match certain criteria.
* Predictively completing entities in a search box.
* Annotating/organizing content using the Knowledge Graph entities.

#### Quick Example: Search for a Person

Create a `KGSearch` instance with your API Key, store it in a variable (in this case: `kGraph`), and then call `kGraph.search(params, callback)`

```js
import KGSearch from 'google-kgsearch'
const kGraph = KGSearch(process.env.KGSEARCH_API_KEY)

let params = {
  query: 'Taylor Swift',
  types: 'Person',
  limit: 1
}

kGraph.search(params, (err, items) => {
  if (err) console.error(err)
  console.log(items)
})
```

Outputs an `object`:

```js
[
  {
    '@type': 'EntitySearchResult',
    result: {
      '@id': 'kg:/m/0dl567',
      name: 'Taylor Swift',
      '@type': [object],
      description: 'Singer-songwriter',
      image: [object],
      detailedDescription: [object],
      url: 'http://www.taylorswift.com/'
    },
    resultScore: 280.279816
  }
]
```

See the [example](https://github.com/krismuniz/google-kgsearch/blob/master/examples/person_search.js) for more information.

## Installation

Installing `google-kgsearch` is as simple as installing any other [npm](https://npmjs.com) module:

```shell
$ npm install google-kgsearch --save
```

## Requirements

To use this API you need an API key. An API key identifies your project to check quotas and access. Go to the [Credentials page](https://console.developers.google.com/apis/credentials) to get an API key.

Check out [Google Developers' guide](https://developers.google.com/knowledge-graph/) for more information.

## Usage

#### Initialization

After importing the `google-kgsearch` file, you need to initialize a new `KGSearch` instance with your `API_TOKEN` and store it in a variable (in this case its `kGraph`):

```js
import KGSearch from 'google-kgsearch'
const kGraph = KGSearch(process.env.KGSEARCH_API_KEY)
```

#### Search Google's Knowledge Graph

Use the `.search()` method to search Google's Knowledge Graph.

```js
/* ... */

kGraph.search({ query: 'Puerto Rico'}, (err, items) => {
  if (err) console.error(err)
  console.log(items)
})
```

The `kGraph.search(params, callback)` method takes `params` as a first argument. Under the hood the module converts these into query strings.

It also takes a callback function to handle the data received from the API.

## reference

#### `KGSearch`

| Argument | Type | Description
|--- |--- |---
| `api_key` (required) | `string` | Enables access to the Google's Knowledge Graph Search API

#### `.search()`

Method of `KGSearch(api_key)`

| Argument | Type | Description
|--- |--- |---
| `params` (required) | `object` | API query parameters (query, types, limit, etc.)
| `callback` (required) | `function` | A function that handles the response data from the API

`callback` takes two arguments:

1. `err` (for error handling; `null` if there are no errors)
2. `data` (the data returned by the API)

## Contributing

#### Bug Reports & Feature Requests

Something does not work as expected or perhaps you think this module needs a feature? Please [open an issue](https://github.com/krismuniz/google-kgsearch/issues/new) using GitHub's [issue tracker](https://github.com/krismuniz/google-kgsearch/issues). Please be as specific and straightforward as possible.

#### Developing

Pull Requests (PRs) are welcome. Make sure you follow the same basic stylistic conventions as the original code (i.e. ["JavaScript standard code style"](http://standardjs.com))

## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

**Copyright (c) 2016 [Kristian Muñiz](https://www.krismuniz.com)**
