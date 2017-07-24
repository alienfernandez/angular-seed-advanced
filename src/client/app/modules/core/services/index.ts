// app
import { ConsoleService } from './console.service';
import { LogService } from './logging/log.service';
import { RouterExtensions } from './router-extensions.service';
import { WindowService } from './window.service';
import { AppService } from './app.service';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';


import { Http, RequestOptions, XHRBackend } from '@angular/http';
import {LocalStorageService} from 'angular-2-local-storage';


export const CORE_PROVIDERS: any[] = [
  WindowService,
  StorageService,
  ConsoleService,
  LogService,
  HttpService,
  { //Override the HTTP Service with our HttpService
    provide: Http,
    useFactory: (backend: XHRBackend, options: RequestOptions, sessionStorage: LocalStorageService) => {
      return new HttpService(backend, options, sessionStorage);
    },
    deps: [XHRBackend, RequestOptions, LocalStorageService]
  },
  AppService,
  RouterExtensions,
];

export * from './console.service';
export * from './logging/index';
export * from './router-extensions.service';
export * from './window.service';
export * from './app.service';
export * from './storage.service';
export * from './http.service';
