var sampleQueries = {
	"example.1" :
  {
    "distinct": true,
    "variables": [
        "?disease",
        "?symptom"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
        {
            "line": {
                "s": "?disease",
                "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#has_symptom",
                "o": "?symptom",
                "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
                "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Symptom",
                "values": [
                    {
                        "label": "abdominal cramps",
                        "uri": "http://www.wikidata.org/entity/Q3002092"
                    }
                ]
            },
            "children": []
        }
    ]
},
  "example.2":
  {
    "distinct": true,
    "variables": [
        "?this",
        "?Cell_Type_2",
        "?Chemical_Compound_2"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
        {
            "line": {
                "s": "?this",
                "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#encoded_by",
                "o": "?Gene_1",
                "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Protein",
                "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Gene",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "?Gene_1",
                        "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#marker_of",
                        "o": "?Cell_Type_2",
                        "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Gene",
                        "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Cell_Type",
                        "values": []
                    },
                    "children": []
                }
            ]
        },
        {
            "line": {
                "s": "?this",
                "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#binds_compound",
                "o": "?Chemical_Compound_2",
                "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Protein",
                "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Chemical_Compound",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "?Chemical_Compound_2",
                        "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#treats",
                        "o": "?Disease_2",
                        "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Chemical_Compound",
                        "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
                        "values": [
                            {
                                "label": "malaria",
                                "uri": "http://www.wikidata.org/entity/Q12156"
                            }
                        ]
                    },
                    "children": []
                }
            ]
        }
    ]
},
"example.3":
{
  "distinct": true,
  "variables": [
      "?this",
      "?Chemical_Compound_2",
      "?Disease_3"
  ],
  "defaultLang": "en",
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?this",
              "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#medical_condition",
              "o": "?Disease_1",
              "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Clinical_Trial",
              "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
              "values": [
                  {
                      "label": "malaria",
                      "uri": "http://www.wikidata.org/entity/Q12156"
                  }
              ]
          },
          "children": [],
          "notExists": true
      },
      {
          "line": {
              "s": "?this",
              "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#research_intervention",
              "o": "?Chemical_Compound_2",
              "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Clinical_Trial",
              "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Chemical_Compound",
              "values": []
          },
          "children": [
              {
                  "line": {
                      "s": "?Chemical_Compound_2",
                      "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#treats",
                      "o": "?Disease_2",
                      "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Chemical_Compound",
                      "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
                      "values": [
                          {
                              "label": "malaria",
                              "uri": "http://www.wikidata.org/entity/Q12156"
                          }
                      ]
                  },
                  "children": []
              }
          ]
      },
      {
          "line": {
              "s": "?this",
              "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#medical_condition",
              "o": "?Disease_3",
              "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Clinical_Trial",
              "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
              "values": []
          },
          "children": []
      }
  ]
}

};