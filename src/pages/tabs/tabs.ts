import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { SearchPage } from '../search/search';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = SearchPage;
  tab3Root = UserPage;

  constructor() {

  }
}
