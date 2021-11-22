import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Service from 'App/Models/Service'

export default class ServiceSeeder extends BaseSeeder {
  public async run() {
    await Service.createMany([
      {
        active: true,
        title: 'Electrical Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/885/original/tim-kabel-FCrYdP8gohg-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=de008757d41c2aa2a36284f23c9eea3766b4cb5b6c5b90201f9c3d5dc9b05f77',
        price: '95.00',
        description:
          "Full electrical diagnostic of all electronics on boat, including wiring, fuses, batteries, lighting, anything electrical. We will find what's not working and explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 1,
      },
      {
        active: true,
        title: 'Engine Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/886/original/boat_mechanic_2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9733ea32f6d92593e10bb98f9f7bf0d10327668356688eb6c8770012b9310d47',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 1,
      },

      {
        active: true,
        title: 'Trailer Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/888/original/boat_trailer_diagnostic.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fd03da0acd9e56ebdbdee132499c1ea3bef82699b65a7d3e6f7d037ab3b4f840',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 1,
      },
      //Primary
      {
        active: true,
        title: 'Trolling Motor Installation',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/894/original/trolling.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d76cd742ea40b2fd96c81f35ee5721cc2a8411b14d92982f6a2c1c315b260afa',
        price: '880',
        description:
          "Full electrical diagnostic of all electronics on boat, including wiring, fuses, batteries, lighting, anything electrical. We will find what's not working and explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: true,
        primary: true,
        flatRate: false,
        franchiseId: 1,
      },
      {
        active: true,
        title: 'Bimini Top Installation',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/909/original/bimini.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=baf80548d238b7784ea88eb5df8b4f0f7d1ec2f47fb2fc1af0e32fb7a92c5c69',
        price: '275.00',
        description:
          'Installation of new Bimini Top - Professional drilling/mounting/placement of bimini top (parts additional/labor only)',
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: false,
        franchiseId: 1,
      },

      {
        active: true,
        title: 'Pump Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/889/original/bilge.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cd534a01c6b25e881ad9df7171bf36125a3e25a89b7ffb9a4d0ee211383dbf45',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: true,
        franchiseId: 1,
      },
      {
        active: false,
        title: 'Boat Waxing',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/902/original/lighting.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=57e3efb34a99cd15c4a2adb801b16a5a0404b6a598ed815a6be06a588ebbc170',
        price: '895.00',
        description: 'Complete Boat Wash and Wax',
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: true,
        franchiseId: 1,
      },

      // Franchise 2

      {
        active: true,
        title: 'Electrical Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/885/original/tim-kabel-FCrYdP8gohg-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=de008757d41c2aa2a36284f23c9eea3766b4cb5b6c5b90201f9c3d5dc9b05f77',
        price: '95.00',
        description:
          "Full electrical diagnostic of all electronics on boat, including wiring, fuses, batteries, lighting, anything electrical. We will find what's not working and explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 2,
      },
      {
        active: true,
        title: 'Engine Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/886/original/boat_mechanic_2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9733ea32f6d92593e10bb98f9f7bf0d10327668356688eb6c8770012b9310d47',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 2,
      },

      {
        active: true,
        title: 'Trailer Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/888/original/boat_trailer_diagnostic.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fd03da0acd9e56ebdbdee132499c1ea3bef82699b65a7d3e6f7d037ab3b4f840',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: false,
        flatRate: true,
        franchiseId: 2,
      },
      //Primary
      {
        active: true,
        title: 'Trolling Motor Installation',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/894/original/trolling.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d76cd742ea40b2fd96c81f35ee5721cc2a8411b14d92982f6a2c1c315b260afa',
        price: '880',
        description:
          "Full electrical diagnostic of all electronics on boat, including wiring, fuses, batteries, lighting, anything electrical. We will find what's not working and explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: true,
        primary: true,
        flatRate: false,
        franchiseId: 2,
      },
      {
        active: true,
        title: 'Bimini Top Installation',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/909/original/bimini.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=baf80548d238b7784ea88eb5df8b4f0f7d1ec2f47fb2fc1af0e32fb7a92c5c69',
        price: '275.00',
        description:
          'Installation of new Bimini Top - Professional drilling/mounting/placement of bimini top (parts additional/labor only)',
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: false,
        franchiseId: 2,
      },

      {
        active: true,
        title: 'Pump Diagnostic',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/889/original/bilge.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cd534a01c6b25e881ad9df7171bf36125a3e25a89b7ffb9a4d0ee211383dbf45',
        price: '95.00',
        description:
          "Complete engine diagnostic (up to 4 motors) to find out what's not working on your engine(s), then explain what's needed to fix it.",
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: true,
        franchiseId: 2,
      },
      {
        active: false,
        title: 'Boat Waxing',
        imageUrl:
          'https://housecall-line-item-image-production.s3.us-west-1.amazonaws.com/organizational_line_item_templates/images/034/703/902/original/lighting.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6A3PQNPHNPN2ZRXG%2F20211122%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T174844Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=57e3efb34a99cd15c4a2adb801b16a5a0404b6a598ed815a6be06a588ebbc170',
        price: '895.00',
        description: 'Complete Boat Wash and Wax',
        notes: 'notes',
        estimateRequired: false,
        primary: true,
        flatRate: true,
        franchiseId: 2,
      },
    ])
  }
}
