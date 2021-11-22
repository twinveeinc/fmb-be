import { SwaggerConfig } from '@ioc:Adonis/Addons/Swagger'

export default {
  uiEnabled: true, //disable or enable swaggerUi route
  uiUrl: 'docs', // url path to swaggerUI
  specEnabled: true, //disable or enable swagger.json route
  specUrl: '/docs.json',

  middleware: [], // middlewares array, for protect your swagger docs and spec endpoints

  options: {
    swaggerDefinition: {
      info: {
        title: 'Fix My Boat API v1',
        version: '1.0.0',
        description:
          'Welcome to the Fix My Boat Developer Page! Here you can find all API documentation for our V1 environment. Code References and Snippets are in the right hand pane. If you have any questions please feel free to contact us at bruno@fixmyboatusa.com',
      },

      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'API',
        },
      },

      basePath: '/',

      // Example security definitions.
      securityDefinitions: {
        // ApiKey: {
        //   description: 'ApiKey description',
        //   name: 'Authorization',
        // },
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
        // OAuth2 configuration
        // OAuth2: {
        //   authorizationUrl: 'https://example.com/oauth/authorize',
        //   tokenUrl: 'https://example.com/oauth/token',

        //   // define your scopes here
        //   // remove read, write and admin if not necessary
        //   scopes: {
        //     read: 'Grants read access (this is just sample)',
        //     write: 'Grants write access (this is just sample)',
        //     admin:
        //       'Grants read and write access to administrative information (this is just sample)',
        //   },
        // },
      },
    },

    apis: ['app/**/*.ts', 'docs/swagger/**/*.yml', 'start/routes.ts'],
    basePath: '/',
  },
  mode: process.env.NODE_ENV === 'production' ? 'PRODUCTION' : 'RUNTIME',
  specFilePath: 'docs/swagger.json',
} as SwaggerConfig
