import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'render-schema',
  templateUrl: 'render-schema.html'
})
export class RenderSchemaPage {
  schema: any;
  model: any;

  constructor(public navCtrl: NavController) {
    this.model = {
    }

    this.schema = {
      "schema": {
        "type": "object",
        "properties": {
          "first_name": { "type": "string" },
          "last_name": { "type": "string" },
          "address": {
            "type": "object",
            "properties": {
              "street_1": { "type": "string" },
              "street_2": { "type": "string" },
              "city": { "type": "string" },
              "state": {
                "type": "string",
                "enum": [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE",
                    "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
                    "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
                    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
                    "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD",
                    "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]
              },
              "zip_code": { "type": "string" }
            }
          },
          "birthday": { "type": "string" },
          "notes": { "type": "string" },
        },
        "required": [ "last_name" ]
      },
      "layout": [
        { "type": "flex", "flex-flow": "row wrap", "items": [ "first_name", "last_name" ] },
        { "key": "address.street_1", "title": "Address", "placeholder": "Street" },
        { "key": "address.street_2", "notitle": true },
        { "type": "div",
          "display": "flex",
          "flex-direction": "row",
          "items": [
            { "key": "address.city", "flex": "3 3 150px",
              "notitle": true, "placeholder": "City"
            },
            { "key": "address.state", "flex": "1 1 50px",
              "notitle": true, "placeholder": "State"
            },
            { "key": "address.zip_code", "flex": "2 2 100px",
              "notitle": true, "placeholder": "Zip Code"
            }
          ]
        },
        { "key": "birthday", "type": "date" },
        { "type": "section",
          "title": "Notes",
          "expandable": true,
          "expanded": false,
          "items": [ { "key": "notes", "type": "textarea", "notitle": true } ]
        }
      ],
      "data": {
        "first_name": "Jane",
        "last_name": "Doe",
        "address": {
          "street_1": "123 Main St.",
          "city": "Las Vegas",
          "state": "NV",
          "zip_code": "89123"
        },
        "birthday": "1999-09-09",
        "notes": "(This is an example of an uninteresting note.)"
      }
    }
    
  }
  onSubmit(data: any){
    console.log(data);
  }
  onChange(data: any){
    console.log(data);
  }

}
