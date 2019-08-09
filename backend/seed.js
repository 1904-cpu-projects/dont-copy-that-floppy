const { db, models } = require('./index');
const { Product, User, Category } = models;

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [computers, phones, radios, tvs, videoGames] = await Promise.all(
      categories.map(category => {
        return Category.create(category);
      })
    );
    await Promise.all(
      sampleComputers.map(computer => {
        return Product.create({ ...computer, categoryId: computers.id });
      })
    );
    await Promise.all(
      samplePhones.map(phone => {
        return Product.create({ ...phone, categoryId: phones.id });
      })
    );
    await Promise.all(
      sampleRadios.map(radio => {
        return Product.create({ ...radio, categoryId: radios.id });
      })
    );
    await Promise.all(
      sampleTvs.map(tv => {
        return Product.create({ ...tv, categoryId: tvs.id });
      })
    );
    await Promise.all(
      sampleVideoGames.map(vg => {
        return Product.create({ ...vg, categoryId: videoGames.id });
      })
    );
  } catch (ex) {
    console.log(ex);
  }
};

const categories = [
  { name: 'Computers' },
  { name: 'Phones' },
  { name: 'Radios' },
  { name: 'TVs' },
  { name: 'Video Games' }
];

const sampleComputers = [
  {
    name: 'Mac Cube',
    price: 60,
    brand: 'Macintosh',
    description:
      'Remember this old cubey thing?! Perfect place to stick a floppy and play some Oregon Trail!',
    quantity: 15,
    imageUrl: 'https://i.imgur.com/aOZ3pqs.jpg'
  },
  {
    name: 'OG PC',
    price: 50,
    brand: 'IBM',
    description:
      'Clearly having the keyboard attached to the monitor was a great idea. Get yours today!',
    quantity: 11,
    imageUrl: 'https://i.imgur.com/9nzl7xd.jpg'
  },
  {
    name: 'The Box 3.0',
    price: 25,
    brand: 'Hooli',
    description:
      "Gavin Belson's Sugnature Box. Stick it in a server farm and forget about it!",
    quantity: 6,
    imageUrl: 'https://i.imgur.com/M5r0VHJ.png'
  },
  {
    name: 'GPU Rack named Anton',
    price: 600,
    brand: 'Dell',
    description:
      'Are you looking to build a server in your garage to avoid those hefty hosting costs?! If so, Anton will be your new best friend.',
    quantity: 1,
    imageUrl: 'https://i.imgur.com/W77FVVQ.jpg'
  },
  {
    name: 'Abacus',
    price: 15,
    brand: 'The Original Calculator, Inc.',
    description:
      'Count things by hand, forever. The only calculator you will ever need. Unless, you are trying to solve the Riemann Hypothesis.',
    quantity: 150,
    imageUrl: 'https://i.imgur.com/L4hdBxP.jpg'
  },
  {
    name: 'The Enigma Lite',
    price: 1,
    brand: 'German Electronics',
    description:
      'Buy your very own enigma machine. Only problem is, Alan Turing decoded the algorithm back in the 40s. Still fun though!',
    quantity: 250,
    imageUrl: 'https://i.imgur.com/N00KqMP.jpg'
  }
];

const samplePhones = [
  {
    name: 'Rotary Phone - Black',
    price: 12,
    brand: 'Motorola',
    description:
      "You can do that spinny thing with this phone. Even if you aren't calling anyone. Give it a try!",
    quantity: 25,
    imageUrl: 'https://i.imgur.com/Gwdf7Wj.jpg'
  },
  {
    name: 'Rotary Phone - White',
    price: 10,
    brand: 'Nokia',
    description: 'Another spinny. This one in white. Use it to call your mom.',
    quantity: 20,
    imageUrl: 'https://i.imgur.com/I7JKiFm.jpg'
  },
  {
    name: 'Outdoor Rotary Phone',
    price: 22,
    brand: 'Samsung',
    description:
      'This rotary phone works outdoors! Just look at the photo. First weather-proof rotary phone.',
    quantity: 25,
    imageUrl: 'https://i.imgur.com/BHYfBAx.jpg'
  },
  {
    name: 'Pay Phone',
    price: 100,
    brand: 'Bell',
    description:
      'Have you ever wanted your own pay phone?! Well you are in luck.',
    quantity: 2,
    imageUrl: 'https://i.imgur.com/zTxLdvq.jpg'
  }
];

const sampleRadios = [
  {
    name: 'Freestyler Jr.',
    price: 27.5,
    brand: 'RCA',
    description:
      'Get your groove on with this mini radio. Do not let its size fool you. This thing packs a punch!',
    quantity: 67,
    imageUrl: 'https://i.imgur.com/VsWqRNa.jpg'
  },
  {
    name: "Grandpa's Dial Radio",
    price: 49.99,
    brand: 'Magnadyne',
    description:
      'Is grandpa turning on the radio or trying to communicate with alien lifeforms? Now you can find out for yourself!',
    quantity: 13,
    imageUrl: 'https://i.imgur.com/dRDhhWy.jpg'
  },
  {
    name: 'Ghetto Blaster',
    price: 75,
    brand: 'Crown',
    description:
      'Everyone will know how cool you are when you start walking around with this radio! Everyone will want to be your friend.',
    quantity: 5,
    imageUrl: 'https://i.imgur.com/LmlINqc.jpg'
  },
  {
    name: 'Classic Dual Deck',
    price: 19.99,
    brand: 'Panasonic',
    description:
      "What is better than one tape deck?! That's right! Two tape decks.",
    quantity: 500,
    imageUrl: 'https://i.imgur.com/AAitizg.jpg'
  },
  {
    name: 'Serious Speakers',
    price: 99.99,
    brand: 'Sony',
    description:
      'Are you serious about sound and do not care about how much space your speakers need?!? Then this is the radio for you.',
    quantity: 9,
    imageUrl: 'https://i.imgur.com/tcxOqFV.jpg'
  }
];

const sampleTvs = [
  {
    name: 'Asbestos Collector',
    price: 9.99,
    brand: 'Zenith',
    description: 'The name says it all.',
    quantity: 3,
    imageUrl: 'https://i.imgur.com/rqnjAUT.jpg'
  },
  {
    name: 'ColorBox',
    price: 19.99,
    brand: 'Magnavox',
    description: 'One of the original color TVs. Still looks okay.',
    quantity: 33,
    imageUrl: 'https://i.imgur.com/Bka9U9r.jpg'
  },
  {
    name: 'AlienBox',
    price: 29.99,
    brand: 'Sony',
    description: "This TV has four legs. Don't let it run away!",
    quantity: 13,
    imageUrl: 'https://i.imgur.com/vTeztxT.jpg'
  },
  {
    name: 'DialBox',
    price: 5.0,
    brand: 'RCA',
    description:
      'You have to get up to change the channel. So get this TV and skip the gym!',
    quantity: 23,
    imageUrl: 'https://i.imgur.com/ByYGPEX.jpg'
  },
  {
    name: 'Woodgrain TV',
    price: 5.99,
    brand: 'LG',
    description:
      'This TV comes wrapped in a beautiful mahogany. Is it a TV or a tree?!',
    quantity: 21,
    imageUrl: 'https://i.imgur.com/4M6R4Pa.jpg'
  },
  {
    name: 'AntennaBox',
    price: 7,
    brand: 'ACME',
    description: 'If Bugs Bunny was a TV, this would be it!',
    quantity: 7,
    imageUrl: 'https://i.imgur.com/3bl4Btu.png'
  }
];

const sampleVideoGames = [
  {
    name: 'Joy Stick Master',
    price: 39.99,
    brand: 'Amstrad',
    description: 'Enjoy this vintage flight simulator machine.',
    quantity: 17,
    imageUrl: 'https://i.imgur.com/n8RqobT.jpg'
  },
  {
    name: 'Jaguar',
    price: 49.99,
    brand: 'Atari',
    description: 'One of the first game controllers ever made.',
    quantity: 17,
    imageUrl: 'https://i.imgur.com/WPUyKKZ.jpg'
  },
  {
    name: 'Virtual Boy',
    price: 199.99,
    brand: 'SEGA',
    description:
      'Get ready for a fully immersive VR experience. Are you a Virtual Boy?!',
    quantity: 19,
    imageUrl: 'https://i.imgur.com/jy9Fdke.jpg'
  },
  {
    name: 'Game Gear',
    price: 29.98,
    brand: 'SEGA',
    description:
      'Move over GameBoy! This portable gaming system lets you take your game anywhere.',
    quantity: 29,
    imageUrl: 'https://i.imgur.com/rfdneTq.jpg'
  },
  {
    name: 'Nintendo ES',
    price: 59.99,
    brand: 'Nintendo',
    description: 'If you do not know about this system then move along.',
    quantity: 100,
    imageUrl: 'https://i.imgur.com/0vapjD4.jpg'
  },
  {
    name: 'GameBoy',
    price: 29.99,
    brand: 'Nintendo',
    description: 'The classic GameBoy!',
    quantity: 150,
    imageUrl: 'https://i.imgur.com/mNu5eUG.jpg'
  }
];

module.exports = seed;
