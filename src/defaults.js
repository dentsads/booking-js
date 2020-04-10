'use strict';

/*
 * Default configuration
 */

var primary = {
  el: '#bookingjs',
  name: '',
  autoload: true,
  debug: false,
  disable_remote_load: false,
  disable_confirm_page: false,
  create_booking_response_include: ['attributes', 'event', 'user'],
  ui: {
    show_timezone_helper: true
  },
  availability: {},
  booking: {},
  customer_fields: {},
  callbacks: {},
  sdk: {
    headers: {
      'Timekit-Context': 'widget'
    }
  },
  fullcalendar: {
    views: {
      agenda: {
        displayEventEnd: false
      },
      listing: {
        type: 'list',
        duration: { days: 365 / 2 },
        listDayAltFormat: 'dddd',
        noEventsMessage: 'No timeslots available'
      }
    },
    allDaySlot: false,
    scrollTime: '08:00:00',
    nowIndicator: true
  },
  createBooking: function(args) {
    return Promise.resolve('BOOKING SUCCESS')
  },
  fetchAvailability: function() {
    return Promise.resolve({
      "data" : [{
          "start": "2020-04-09T18:00:00.000+02:00",
          "end": "2020-04-09T19:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T19:00:00.000+02:00",
          "end": "2020-04-10T20:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T20:00:00.000+02:00",
          "end": "2020-04-10T21:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T21:00:00.000+02:00",
          "end": "2020-04-10T22:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }]
    })
  }
};

var primaryWithoutProject = {
  ui: {
    display_name: '',
    show_credits: true,
    show_timezone_helper: true,
    availability_view: 'agendaWeek',
    avatar: '',
    time_date_format: '12h-mdy-sun',
    localization: {
      allocated_resource_prefix: 'with',
      submit_button: 'Book it',
      success_message: 'We have received your booking and sent a confirmation to %s'
    }
  },
  availability: {
    mode: 'roundrobin_random'
  },
  booking: {
    graph: 'instant'
  },
  customer_fields: {
    name: {
      title: 'Name',
      required: true
    },
    email: {
      title: 'E-mail',
      format: 'email',
      required: true
    }
  },
  createBooking: function(args) {
    return Promise.resolve('BOOKING SUCCESS')
  },
  fetchAvailability: function() {
    return Promise.resolve({
      "data" : [{
          "start": "2020-04-09T18:00:00.000+02:00",
          "end": "2020-04-09T19:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T19:00:00.000+02:00",
          "end": "2020-04-10T20:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T20:00:00.000+02:00",
          "end": "2020-04-10T21:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }, {
          "start": "2020-04-10T21:00:00.000+02:00",
          "end": "2020-04-10T22:00:00.000+02:00",
          "resources": [ {"id": "cca33050-2adf-4bf5-86e3-e989d6974b41"} ]
        }]
    })
  }
}

var customerFieldsNativeFormats = {
  email: {
    format: 'email'
  },
  comment: {
    format: 'textarea'
  },
  phone: {
    format: 'tel'
  }
}

// Preset: timeDateFormat = '24h-dmy-mon'
var timeDateFormat24hdmymon = {
  ui: {
    booking_date_format: 'D. MMMM YYYY',
    booking_time_format: 'HH:mm'
  },
  fullcalendar: {
    timeFormat: 'HH:mm',
    firstDay: 1,
    views: {
      basic: {
        columnFormat: 'dddd D/M'
      },
      agenda: {
        columnFormat: 'ddd D/M',
        slotLabelFormat: 'HH:mm'
      }
    }
  }
};

// Preset: timeDateFormat = '12h-mdy-sun'
var timeDateFormat12hmdysun = {
  ui: {
    booking_date_format: 'MMMM D, YYYY',
    booking_time_format: 'h:mma'
  },
  fullcalendar: {
    timeFormat: 'h:mma',
    firstDay: 0,
    views: {
      basic: {
        columnFormat: 'dddd M/D',
      },
      agenda: {
        columnFormat: 'ddd M/D',
        slotLabelFormat: 'h:mma'
      }
    }
  }
};

// Preset: availabilityView = 'agendaWeek'
var availabilityViewAgendaWeek = {
  fullcalendar: {
    header: {
      left: '',
      center: '',
      right: 'today, prev, next'
    },
    defaultView: 'agendaWeek'
  }
}

// Preset: availabilityView = 'listing'
var availabilityViewListing = {
  fullcalendar: {
    header: {
      left: '',
      center: '',
      right: ''
    },
    defaultView: 'listing'
  }
}

// Export objects
module.exports = {
  primary: primary,
  primaryWithoutProject: primaryWithoutProject,
  customerFieldsNativeFormats: customerFieldsNativeFormats,
  presets: {
    timeDateFormat: {
      '24h-dmy-mon': timeDateFormat24hdmymon,
      '12h-mdy-sun': timeDateFormat12hmdysun
    },
    availabilityView: {
      'agendaWeek': availabilityViewAgendaWeek,
      'listing': availabilityViewListing
    }
  }
};
