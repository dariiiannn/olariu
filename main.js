(function() {
  const images = [
    {
      id: 1,
      title: 'Studio image',
      stuff: 'Cluj',
      year: '2017',
      collection: ''
    },
    {
      id: 2,
      title: 'Fireflies of the Levant',
      stuff: 'resin, cement, EPS Foam, 150x100x8 cm',
      year: '2013',
      collection: 'Beelden aan Zee Collection, Hague'
    },
    {
      id: 3,
      title: 'Constantinople',
      stuff: 'resin, cement, EPS Foam, 200x150x10 cm',
      year: '2013',
      collection: 'Private collection, Berlin'
    },
    {
      id: 4,
      title: 'Baghdad',
      stuff: 'resin, cement, EPS Foam, 150x100x10 cm',
      year: '2015',
      collection: 'Private collection, Barcelona'
    },
    {
      id: 5,
      title: 'The Night (after Arno Breker)',
      stuff: 'resin, cement, EPS Foam, 150x100x10 cm',
      year: '2013',
      collection: ''
    },
    {
      id: 6,
      title: 'King of Stalingrad',
      stuff: 'poly, resin, EPS Foam, 110x125x65 cm',
      year: '2013-2016',
      collection: ''
    },
    {
      id: 7,
      title: 'Untitled (Glory Holes)',
      stuff: 'resin, cement, EPS Foam, 150x100x8 cm',
      year: '2014',
      collection: ''
    },
    {
      id: 8,
      title: 'Spring',
      stuff: 'resin, cement, EPS Foam, 150x150x10 cm',
      year: '2015',
      collection: 'Private collection, Nuremberg, Germany'
    },
    {
      id: 9,
      title: 'Formula for Generally and Elementary Statistics',
      stuff: 'resin, cement, EPS Foam, ca 200 cm',
      year: '2015',
      collection: ''
    },
    {
      id: 10,
      title: 'Heavy-Duty',
      stuff: 'poly, EPS Foam, 150x100x10 cm',
      year: '2016',
      collection: ''
    },
    {
      id: 11,
      title: 'Daybreak (after Delacroix)',
      stuff: 'resin, cement, paint, EPS Foam, 200x150x10 cm',
      year: '2016',
      collection: ''
    },
    {
      id: 12,
      title: 'Abduction from the Seraglio',
      stuff: 'poly, paint, glitter, EPS foam, 150x200x10 cm',
      year: '2016',
      collection: 'Private collection, Bucharest'
    },
    {
      id: 13,
      title: 'Void (Great Escape)',
      stuff: 'resin, cement, paint, glitter, EPS foam, 100x100x10 cm',
      year: '2016',
      collection: 'Private collection, Bucharest'
    },
    {
      id: 14,
      title: 'Western Composition (after Laocoon)',
      stuff: 'poly, polyurethane paint, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 15,
      title: 'Triptych (Halo, Last Moment, Miro)',
      stuff: 'poly, EPS foam, 150x100x10 cm each',
      year: '2016',
      collection: ''
    },
    {
      id: 16,
      title: 'Troika (after Rublev)',
      stuff: 'poly, EPS foam, 150x100x10 cm each',
      year: '2016',
      collection: ''
    },
    {
      id: 17,
      title: 'Three-Handed Madonna',
      stuff: 'poly, polyurethane paint, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 18,
      title: 'Infant Formula Trade (after H. Daumier)',
      stuff: 'poly, polyurethane paint, EPS foam, 150x200x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 19,
      title: 'The Ruins of Empire',
      stuff: 'poly, polyurethane paint, EPS foam, 250x150x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 20,
      title: 'Luxuria',
      stuff: 'poly, EPS foam, 100x110x20 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 21,
      title: 'Last Supper',
      stuff: 'poly, car paint, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 22,
      title: 'Politically Correct Piece (CP7070)',
      stuff: 'poly, polyurethane paint, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 23,
      title: 'Politically Correct Piece (grey hole)',
      stuff: 'poly, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 24,
      title: 'Politically Correct Piece (CP7235)',
      stuff: 'poly, polyurethane paint, EPS foam, 150x100x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 25,
      title: 'Politically Correct Piece (C02055)',
      stuff:
        'poly, polyurethane paint, cellular concrete, EPS foam, 150x130x20 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 26,
      title: 'Politically Correct Piece (CV4060)',
      stuff: 'poly, polyurethane paint, cement, EPS foam, 150x100x20 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 27,
      title: 'Roving',
      stuff: 'poly, car paint, EPS foam, 200x150x10 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 28,
      title: 'Drifting (Jet ski)',
      stuff: 'poly, polyurethane paint, found objects, 120x70x50 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 29,
      title: 'Drifting (CV4390)',
      stuff: 'poly, polyurethane paint, found objects, 100x150x80 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 30,
      title: 'Drifting (CN8400)',
      stuff: 'poly, polyurethane paint, found objects, 105x130x72 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 31,
      title: 'Drifting (CW9205)',
      stuff: 'poly, polyurethane paint, found objects, 100x140x100 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 32,
      title: 'Drifting (CO2085)',
      stuff: 'poly, polyurethane paint, found objects, 125x130x95 cm',
      year: '2017',
      collection: ''
    },
    {
      id: 32,
      title: 'Drifting (CP7250)',
      stuff: 'poly, polyurethane paint, found objects, 125x130x95 cm',
      year: '2017',
      collection: ''
    }
  ];

  var modal = document.getElementById('modal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var elements = document.getElementsByClassName('gallery-image');
  var modalImg = document.getElementById('modalImage');
  var captionText = document.getElementById('caption');

  Array.prototype.forEach.call(elements, element => {
    element.onclick = function(event) {
      modal.style.display = 'block';
      modalImg.src = this.src;
      document.body.className = 'modal-open';
      captionText.innerHTML = `
        <div>
          <span class="italic">${images[parseInt(this.id) - 1].title}, </span> 
          <span>${images[parseInt(this.id) - 1].year}</span>
        </div>
        
        <span>${images[parseInt(this.id) - 1].stuff}</span>        
        <span>${images[parseInt(this.id) - 1].collection}</span>        
      `;
    };
  });

  let span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  };
})();
