export class AppModel {}

export class PostModel {
  client_id: string = '';
  client_secret: string = '';
}

export class BearerModel {
  client_id: string = '';
  client_secret: string = '';
}

export class TokenModel {
  client_id: string = '';
  access_token: string = '';
}

export class BearerResultModel {
  access_token: string = '';
  token_type: string = '';
}

export class TokenResultModel {
  data: Datum[] = [];
  paging: Paging = new Paging();
}

export class Datum {
  id: string = '';
  login_url: string = '';
  access_token: string = '';
}

export class Paging {
  cursors: Cursors = new Cursors();
}

export class Cursors {
  before: string = '';
  after: string = '';
}
