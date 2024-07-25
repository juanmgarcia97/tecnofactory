import { MarvelResponse } from './types';

export const mockedData: MarvelResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '9607afde819cf1beab49335d2be16389eec09231',
  data: {
    offset: 20,
    limit: 20,
    total: 950,
    count: 20,
    results: [
      {
        id: 51043,
        digitalId: 35502,
        title: 'Sensational Spider-Man (1996) #8',
        issueNumber: 8,
        variantDescription: '',
        description: '',
        modified: '2017-01-18T13:56:31-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Spider-Man struggles between taking time to recover in the hospital, versus resuming hero duties. Against Aunt May’s insistence, Spidey takes to the costume again, but soon wishes he had stayed in bed! It’s Spider-Man vs. the Looter!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/51043',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/51043/sensational_spider-man_1996_8?utm_campaign=apiRef&utm_source=43665bf3370ed665ef0bd043ea73d162',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Sensational-Spider-Man-1996-8/digital-comic/35502?utm_campaign=apiRef&utm_source=43665bf3370ed665ef0bd043ea73d162',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=35502&utm_campaign=apiRef&utm_source=43665bf3370ed665ef0bd043ea73d162',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/35502?utm_campaign=apiRef&utm_source=43665bf3370ed665ef0bd043ea73d162',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/19135',
          name: 'Sensational Spider-Man (1996)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '1996-09-08T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2014-09-01T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2017-01-23T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2014-10-21T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/587fb963aa122',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/587fb963aa122',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/51043/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2983',
              name: 'Richard Case',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/682',
              name: 'Todd Dezago',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/206',
              name: 'Mike Wieringo',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/51043/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009490',
              name: 'May Parker',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/51043/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/135997',
              name: 'Cover to Sensational Spider-Man (1996) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/135998',
              name: 'Story to Sensational Spider-Man (1996) #8',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/51043/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 37495,
        digitalId: 15692,
        title: 'All-New Iron Manual (2008) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          "Read this dossier of Iron Man's allies, enemies and compatriots, as well as take a tour of his armory through the ages! This is your definitive guide to the tech behind Iron Man!",
        modified: '2023-06-19T12:11:16-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 34,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/37495',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/37495/all-new_iron_manual_2008_1?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/All-New-Iron-Manual-Digital-Comic-1/digital-comic/15692?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=15692&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/13494',
          name: 'All-New Iron Manual (2008 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-09-22T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2012-09-14T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-05-26T09:56:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50b538eb72031',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/50b538eb72031',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/37495/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/37495/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/37495/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/106273',
              name: 'cover from Iron Man Manual #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/186888',
              name: 'story from Iron Man Manual (2008) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/37495/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 62344,
        digitalId: 43115,
        title: 'All-New, All-Different Marvel Reading Chronology (2017) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          "Looking for starting points and must-read moments of your favorite Marvel characters? It's all here in this latest edition of the Marvel Reading Chronology! Maximize your reading experience with these easy-to-follow chronologies will guide you through your reading list and make you the merriest Marvelite on your block!",
        modified: '2017-10-30T15:04:40-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Looking for starting points and must-read moments of your favorite Marvel characters? It's all here in this latest edition of the Marvel Reading Chronology! Maximize your reading experience with these easy-to-follow chronologies will guide you through your reading list and make you the merriest Marvelite on your block!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/62344',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/62344/all-new_all-different_marvel_reading_chronology_2017_1?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=43115&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22896',
          name: 'All-New, All-Different Marvel Reading Chronology (2017)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2017-05-10T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2016-08-17T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2017-10-30T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/80/59f7779c22f62',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/80/59f7779c22f62',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62344/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'Various',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62344/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62344/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143152',
              name: 'cover to All-New, All-Different Marvel Reading Chronology (2017) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143153',
              name: 'interior to All-New, All-Different Marvel Reading Chronology (2017) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62344/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 61238,
        digitalId: 42480,
        title: 'Amazing Scarlet Spider (1995) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          "Look out, Peter – there's a new webslinger in town! Ben Reilly, AKA The Scarlet Spider! But he's not the only new kid on the block – there's a new Doctor Octopus too, and she's trapped Ben in a virtual reality nightmare? Can he make it out alive – or is the Scarlet Spider's saga over before it even begins?",
        modified: '2019-08-09T16:47:26-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Look out, Peter – there's a new webslinger in town! Ben Reilly, AKA The Scarlet Spider! But he's not the only new kid on the block – there's a new Doctor Octopus too, and she's trapped Ben in a virtual reality nightmare? Can he make it out alive – or is the Scarlet Spider's saga over before it even begins?",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/61238',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/61238/amazing_scarlet_spider_1995_1?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=42480&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22523',
          name: 'Amazing Scarlet Spider (1995)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '1995-11-01T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2016-06-08T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2019-08-12T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/c0/5d4dd14274c98',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/c0/5d4dd14274c98',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61238/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9565',
              name: 'Tom Defalco',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3754',
              name: 'Mike Lackey',
              role: 'writer',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61238/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61238/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183707',
              name: 'cover from Amazing Scarlet Spider (1995) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183709',
              name: 'story for Amazing Scarlet Spider #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61238/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 61239,
        digitalId: 42479,
        title: 'Amazing Scarlet Spider (1995) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          "While Ben Reilly is on the search for reporter Ken Ellis, he comes face to face with an all-new menace known only as JoyStick! How will the Scarlet Spider fare in the Great Game? And how does the Green Goblin tie into everything that's going on?",
        modified: '2019-08-09T16:48:23-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "While Ben Reilly is on the search for reporter Ken Ellis, he comes face to face with an all-new menace known only as JoyStick! How will the Scarlet Spider fare in the Great Game? And how does the Green Goblin tie into everything that's going on?",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/61239',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/61239/amazing_scarlet_spider_1995_2?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=42479&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22523',
          name: 'Amazing Scarlet Spider (1995)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '1995-12-01T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2016-06-08T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2019-08-12T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5d4dd16612be7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5d4dd16612be7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61239/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9565',
              name: 'Tom Defalco',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61239/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61239/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183708',
              name: 'cover from Amazing Scarlet Spider (1995) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183710',
              name: 'story for Amazing Scarlet Spider #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/61239/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28732,
        digitalId: 14921,
        title: 'Amazing Spider-Man Digital (2009) #15',
        issueNumber: 15,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'MARVEL DIGITAL COMICS EXCLUSIVE\r\nWhen Ben "The Ever-Loving Blue Eyed Thing" Grimm, does a charity bit stint at the F.E.A.S.T. Center, the Center\'s employee of the millennium, May Parker, asks him to find her missing nephew, Peter "The Friendly Neighborhood Spider-Man" Parker! What he uncovers is an A.I.M. conspiracy out to exploit the homeless population of New York City!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28732',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28732/amazing_spider-man_digital_2009_15?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=14921&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-05-26T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-05-23T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-05-26T15:10:26-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bfd56ea90284',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bfd56ea90284',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28732/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11647',
              name: 'Tom Brennan',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/935',
              name: 'Todd Nauck',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/933',
              name: 'Tom Peyer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8704',
              name: 'Javier Tartaglia',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28732/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28732/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62659',
              name: 'Cover #62659',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62660',
              name: 'Interior #62660',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28732/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28746,
        digitalId: 13680,
        title: 'Amazing Spider-Man Digital (2009) #4',
        issueNumber: 4,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'MARVEL DIGITAL COMICS EXCLUSIVE\r\nIn need of good press, J. Jonah Jameson dedicates a day to tabloid Celebrity Teri Hillman. When word reaches the local Kearny High School, three young outcasts, Leila, Becky and Emma, fed up with the celebrity worship that inspires fellow students to terrorize unpopular girls like themselves, make a plan involving Spidey to make a statement against the mayor!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28746',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28746/amazing_spider-man_digital_2009_4?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13680&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-09-20T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2009-12-23T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4bac9ad29d050',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4bac9ad29d050',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28746/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28746/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28746/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62687',
              name: 'Cover #62687',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62688',
              name: 'Interior #62688',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28746/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28734,
        digitalId: 15878,
        title: 'Amazing Spider-Man Digital (2009) #17',
        issueNumber: 17,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601711',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nWhen Spider-Man responds to a seemingly standard smash-and-grab, he finds the culprit is - THE HUMAN TORCH?!  What's he after - and what do HAMMERHEAD and THE INNER DEMONS want with him? Tom DeFalco and Pat Olliffe team up to bring you the tale!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28734',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28734/amazing_spider-man_digital_2009_17?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=15878&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-06-23T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-06-20T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-08-17T11:46:46-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4c65a3648b690',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4c65a3648b690',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28734/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11647',
              name: 'Tom Brennan',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10106',
              name: "Fabio D'AURIA",
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/733',
              name: 'Adam Dekraker',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/721',
              name: 'Brian Reed',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4074',
              name: 'Walden Wong',
              role: 'inker',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28734/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28734/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62663',
              name: 'Cover #62663',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62664',
              name: 'Interior #62664',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28734/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28727,
        digitalId: 14358,
        title: 'Amazing Spider-Man Digital (2009) #10',
        issueNumber: 10,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601011',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS UNLIMITED\r\nTeri Hillman's press bomb is sure to make things more interesting for the already hectic life of Peter Parker. Meanwhile, the Spider-Girls are in more danger than they've ever been, and they're not even dealing with the bad-guys! Will Spider-Man find a way to save his number one fans? Or will the Anti Spider Squad finally reach their goal and put Spidey behind bars?",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28727',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28727/amazing_spider-man_digital_2009_10?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=14358&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-03-31T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-03-28T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-04-06T16:33:34-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/4bba2bbbd898a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/4bba2bbbd898a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28727/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9437',
              name: 'Serge Lapointe',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28727/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28727/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62649',
              name: 'Cover #62649',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62650',
              name: 'Interior #62650',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28727/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28748,
        digitalId: 13744,
        title: 'Amazing Spider-Man Digital (2009) #6',
        issueNumber: 6,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600611',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nThe color-bending villain Spectrum is back in town and this time he's setting his sights on everyone's favorite wall-crawler! With the Spider-Girls and Teri Hillman situation still boiling, and J. Jonah Jameson's Anti-Spider Squad still on his tail, will Spidey get through another day in the private life of Peter Parker?",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28748',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28748/amazing_spider-man_digital_2009_6?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13744&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-10-07T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-10-04T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-01-21T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/4bac158b22f93',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/4bac158b22f93',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28748/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/497',
              name: 'John Livesay',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28748/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28748/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62691',
              name: 'Cover #62691',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62692',
              name: 'Interior #62692',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28748/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28738,
        digitalId: 0,
        title: 'Amazing Spider-Man Digital (2009) #20',
        issueNumber: 20,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960606999-02011',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "It's Election Day in New York City, where the job of mayor is up for grabs! Menace is on the hunt, trashing campaign rallies for candidate Bill Hollister every chance he gets. Spider-Man is on the scene to stop him - if the police would just quit trying to take him into custody! And the search for the Spider-Tracer Killer has reached a crescendo, with a new victim leading police right to Spidey's door! Plus: The Chameleon is one of the worst bad guys in Spider-Man's rogues' gallery. So when he shows up to spoil Inauguration Day by taking the form of newly elected President Barack Obama, Spidey's got his work cut out for him!\r\nCollecting AMAZING SPIDER-MAN #583-588; material from AMAZING SPIDER-MAN: EXTRA #2-3; and \"Gettysburg\r\nDistress,\" a Captain America/Spider-Man/Abraham Lincoln team-up previously available only online!\r\nRated A ...$24.99\r\nISBN: 978-0-7851-3419-0",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28738',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28738/amazing_spider-man_digital_2009_20?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-01-13T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2010-01-11T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 13,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28738/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1020',
              name: 'Fabrizio Fiorentino',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/481',
              name: 'Barry Kitson',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/7964',
              name: 'Andy Macdonald',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/894',
              name: 'Marcos Martin',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/935',
              name: 'Todd Nauck',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13196',
              name: 'John Romita Jr.',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1132',
              name: 'Matt Fraction',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/644',
              name: 'Marc Guggenheim',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10409',
              name: 'Zeb Wells',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/306',
              name: 'Phil Jimenez',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5107',
              name: 'Patrick Olliffe',
              role: 'inker',
            },
          ],
          returned: 13,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28738/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28738/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62671',
              name: 'Cover #62671',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62672',
              name: 'Interior #62672',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28738/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28729,
        digitalId: 14443,
        title: 'Amazing Spider-Man Digital (2009) #12',
        issueNumber: 12,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28729',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28729/amazing_spider-man_digital_2009_12?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=14443&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-04-14T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-04-11T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-04-16T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc8d18539daf',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc8d18539daf',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28729/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13586',
              name: 'Joe Caramagna',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/441',
              name: 'Chris Chuckry',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/935',
              name: 'Todd Nauck',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28729/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28729/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62653',
              name: 'Cover #62653',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62654',
              name: 'Interior #62654',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28729/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28750,
        digitalId: 14044,
        title: 'Amazing Spider-Man Digital (2009) #8',
        issueNumber: 8,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nThe Spider-Girls have staked their claim and the press is buzzing about their proposition to Teri Hillman. J. Jonah Jameson's Anti Spider-Squad is hot on the heels of Spidey and now operating above the law. Meanwhile, what is Jonah's aid, Lubeck, doing working with Teri Hillman's agent?",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28750',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28750/amazing_spider-man_digital_2009_8?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=14044&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-03-02T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2010-02-27T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2010-03-02T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ba961ebb7693',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ba961ebb7693',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28750/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28750/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28750/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62695',
              name: 'Cover #62695',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62696',
              name: 'Interior #62696',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28750/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28742,
        digitalId: 0,
        title: 'Amazing Spider-Man Digital (2009) #24',
        issueNumber: 24,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960606999-02411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28742',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28742/amazing_spider-man_digital_2009_24?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-09-29T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-09-28T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28742/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
              name: 'Virtual Calligr',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/646',
              name: 'Rob Williams',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5107',
              name: 'Patrick Olliffe',
              role: 'inker',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28742/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28742/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62679',
              name: 'Cover #62679',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62680',
              name: 'Interior #62680',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28742/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28731,
        digitalId: 14779,
        title: 'Amazing Spider-Man Digital (2009) #14',
        issueNumber: 14,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'MARVEL DIGITAL COMICS EXCLUSIVE\r\nIt\'s web-slinging time as Spidey teams up with the Thing! When Ben "The Ever-Loving Blue Eyed Thing" Grimm, does a charity bit stint at the F.E.A.S.T. Center, the Center\'s employee of the millennium, May Parker, asks him to find her missing nephew, Peter "The Friendly Neighborhood Spider-Man" Parker!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28731',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28731/amazing_spider-man_digital_2009_14?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=14779&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-05-12T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-05-09T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-05-13T17:09:53-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/62a8c11379cf3',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/62a8c11379cf3',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4beaebcd14a67',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28731/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11647',
              name: 'Tom Brennan',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/935',
              name: 'Todd Nauck',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/933',
              name: 'Tom Peyer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8704',
              name: 'Javier Tartaglia',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28731/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28731/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62658',
              name: 'Interior #62658',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/113219',
              name: 'Cover from Amazing Spider-Man Digital (2009) #14',
              type: 'cover',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28731/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28745,
        digitalId: 13662,
        title: 'Amazing Spider-Man Digital (2009) #3',
        issueNumber: 3,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nSpidey's popularity hits an all time high as he finds himself in the center of a press stunt perpetrated by aspiring superstar Teri Hillman. And with a newly formed Spider-Man Fan Club making headlines, J. Jonah Jameson is sure to put the patented JJJ spin on the story.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28745',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28745/amazing_spider-man_digital_2009_3?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13662&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-16T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-09-13T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2009-12-09T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/70/4bad172c152bd',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/70/4bad172c152bd',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28745/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28745/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28745/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62685',
              name: 'Cover #62685',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62686',
              name: 'Interior #62686',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28745/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28733,
        digitalId: 15182,
        title: 'Amazing Spider-Man Digital (2009) #16',
        issueNumber: 16,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999601611',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 10,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'MARVEL DIGITAL COMICS EXCLUSIVE\r\nSpider-Man vs. the Sinister Six - as only fan favorite FRED HEMBECK can tell it!  But can even the assistance of THE HUMAN TOCH help Spider-Man when they expand to - the SINISTER SEVEN? Find out in THE SINISTER SIX (plus one)',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28733',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28733/amazing_spider-man_digital_2009_16?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=15182&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2010-06-09T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2010-06-06T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-06-23T13:56:53-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4c225b6bd6b15',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4c225b6bd6b15',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28733/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11647',
              name: 'Tom Brennan',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2997',
              name: 'Fred Hembeck',
              role: 'inker',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28733/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28733/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62661',
              name: 'Cover #62661',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62662',
              name: 'Interior #62662',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28733/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28726,
        digitalId: 13552,
        title: 'Amazing Spider-Man Digital (2009) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nTHE PRIVATE LIFE OF PETER PARKER PREMIERS! The Amazing Spider-Man joins the ever-growing library of Marvel online exclusive comics!\r\n\r\nPeter Parker's life is already filled with enough problems to fill three comics a month, but thanks to the miracles of modern technology, now his personal pathos can follow you right to where you blog incessantly about the inanities of your own life!\r\n\r\nWith J. Jonah Jameson firmly entrenched as Mayor of New York, Pete and JJJ find themselves victims of the city's newest fad: loving Spider-Man! Sure it may sound great, but when villains start targeting citizens and celebrity, Pete's going to find out that Jonah may have been right all along: Spider-Man is a threat AND a  menace.\r\n\r\nWritten by Bob Gale (AMAZING SPIDER-MAN, Back To The Future) and with art by Patrick Olliffe (UNTOLD TALES OF SPIDER-MAN), the Amazing Spider-Man digital comic will be your one-stop, bi-weekly shop for the trials, troubles and tribulations of Marvel's greatest  character.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28726',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28726/amazing_spider-man_digital_2009_1?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13552&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-02T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-08-30T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2009-11-09T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4badd30663460',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4badd30663460',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28726/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28726/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28726/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62647',
              name: 'Cover #62647',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62648',
              name: 'Interior #62648',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28726/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28747,
        digitalId: 13695,
        title: 'Amazing Spider-Man Digital (2009) #5',
        issueNumber: 5,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nAt the chagrin of J. Jonah Jameson and the Spider-Girls, Teri Hillman has stolen the Spider-Girls trademark and is using it to increase her own popularity. Now Peter must make sure the Spider-Girls don't do anything impulsive all while dealing with the return of the villainous Spectrum!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28747',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28747/amazing_spider-man_digital_2009_5?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13695&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-30T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-09-27T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-01-13T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bac85b48cfd1',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/40/4bac85b48cfd1',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28747/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28747/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28747/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62689',
              name: 'Cover #62689',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62690',
              name: 'Interior #62690',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28747/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 28737,
        digitalId: 13590,
        title: 'Amazing Spider-Man Digital (2009) #2',
        issueNumber: 2,
        variantDescription: '',
        description: '',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '75960606999600211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Comic',
        pageCount: 8,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "MARVEL DIGITAL COMICS EXCLUSIVE\r\nWith J. Jonah Jameson firmly entrenched as Mayor of New York, Pete and JJJ find themselves victims of the city's newest fad: loving Spider-Man! Sure it may sound great, but when villains start targeting citizens and celebrity, Pete's going to find out that Jonah may have been right all along: Spider-Man is a threat AND a menace. Written by Bob Gale (AMAZING SPIDER-MAN, \"Back To The Future\") and with art by Patrick Olliffe (UNTOLD TALES OF SPIDER-MAN), the Amazing Spider-Man digital comic will be your one-stop, bi-weekly shop for the trials, troubles and tribulations of Marvel's greatest character.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/28737',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/28737/amazing_spider-man_digital_2009_2?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=13590&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9071',
          name: 'Amazing Spider-Man Digital (2009 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2009-09-09T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2009-09-06T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2009-11-24T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bad82fd3cb45',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bad82fd3cb45',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28737/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/428',
              name: 'Antonio Fabela',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13319',
              name: 'Pat Olliffe',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11879',
              name: 'Stephen Wacker',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28737/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28737/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62669',
              name: 'Cover #62669',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/62670',
              name: 'Interior #62670',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/28737/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
