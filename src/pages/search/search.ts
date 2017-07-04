import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {RedditsPage} from '../reddits/reddits';


@Component({
  selector: 'search',
  templateUrl: 'search.html',

})
export class SearchPage {

  constructor(public navCtrl: NavController) {

  }
}
