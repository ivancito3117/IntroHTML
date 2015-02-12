var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Introducción a HTML',
    subtitle: 'Iniciando en la Web',
    eventInfo: {
      title: 'Ciclo de Aprendizaje DevHunter.co',
      date: '12/Febrero/2015'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/DevHunter-Logo-Icono.svg',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Ivan Jose Diaz Morales',
    company: 'DevHunter.co',
    twitter: '@ivajo26',
    github: 'http://github.com/ivajo26'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    github: 'http://github.com/you'
  }*/]
};