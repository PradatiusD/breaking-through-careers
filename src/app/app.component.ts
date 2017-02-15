import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Find a Passion';
  tagline = 'Be part of an awesome interchange between South Florida middle schoolers & professionals';
  event = {
    date: 'Sat, February 18th',
    time: '9:00am-1:30pm',
    eventbrite: 'https://www.eventbrite.com/e/breaking-through-careers-with-breakthrough-miami-knowledge-of-careers-tickets-31435315876',
    volunteer: 'https://goo.gl/forms/cjfTUO1ha7OTqp1A2',
    facebook: 'https://www.facebook.com/events/412520355748005/',
    location: 'Miami Country Day School',
    address: ' 601 Northeast 107th Street, Miami, FL 33161'
  };

  footerMessage = 'Please be sure to use the hashtag <a href="https://www.instagram.com/explore/tags/breakingthroughcareers">#breakingthroughcareers</a> on any photos, tweets, or posts that you have!';
  copyrightYear = new Date();

  volunteers = VOLUNTEERS;
  sponsors = SPONSORS;
  highlights = HIGHLIGHTS;

  clicked (url) {
    window.open(url);
  }
}

export class Sponsor {
  name: string;
  url:  string;
  img?: string;
}

export class Volunteer {
  name: {
    first: string,
    last: string
  };
  title: string;
  image: string;
  sector: string;
  mission: string;
  organization: string;
  profile: string;
}

export class Highlight {
  icon: string;
  color: string;
  title: string;
  message: string;
}


const VOLUNTEERS: Volunteer[] = [
  {
    name: {
      first: 'Kierra',
      last:  'Smith'
    },
    title: 'Senior Site Director',
    image: 'images/kierra.jpg',
    sector: 'Education',
    mission: 'I assist scholars in setting and meeting personal and academic goals.', 
    organization: 'Breakthrough Collaborative',
    profile: 'https://www.breakthroughmiami.org/portal/leadership-team'
  },
  {
    name: {
      first: 'Kimberly',
      last: 'Arredondo',
    },
    title: 'Associate Director of Research, Prospect Management and Stewardship',
    image: 'images/kimberly.jpg',
    sector: 'Fundraising',
    mission: 'I direct our school\'s research and donor relations',
    organization: 'Ransom Everglades School',
    profile: 'https://www.linkedin.com/in/kimberly-arredondo-ba614651'
  },
  {
    name: {
      first: 'Stefan',
      last: 'Kénel-Pierre'
    },
    title: 'Assistant Clinical Professor',
    image: 'images/stefan.jpg',
    sector: 'Healthcare',
    mission: 'I help save lives and connect with patients every day',
    organization: 'University of Miami Hospital',
    profile: 'https://www.linkedin.com/in/c-stefan-k%C3%A9nel-pierre-35792730/'
  },
  {
    name: {
      first: 'Jade',
      last: 'Palomino'
    },
    title: 'Manager & Strategist',
    image: 'images/jade.jpg',
    sector: 'Entrepreneurship',
    mission: 'I partner with, mentor & help grow Miami local start-ups',
    organization: 'Endeavor',
    profile: 'https://www.linkedin.com/in/jade-palomino-b96a163b/'
  },
  {
    name: {
      first: 'Kenneth',
      last:  'Garrett'
    },
    title: 'Associate Site Director',
    image: 'images/kenneth.jpg',
    sector: 'Education',
    mission: 'I support scholars by providing a safe place to learn and lead.', 
    organization: 'Breakthrough Collaborative',
    profile: 'https://www.breakthroughmiami.org/portal/leadership-team'
  },
  {
    name: {
      first: 'Michael',
      last: 'Ragheb',
    },
    title: 'Founder & CEO',
    image: 'images/michael.jpg',
    sector: 'Non-Profit',
    mission: 'I engage kids with career opportunities and teach at the University of Miami',
    organization: 'Knowledge of Careers',
    profile: 'https://www.linkedin.com/in/michael-ragheb-52980567'
  },
   {
    name: {
      first: 'Daniel',
      last: 'Prada',
    },
    title: 'Lead Software Engineer',
    image: 'images/daniel.jpg',
    sector: 'Information Technology',
    mission: 'I build websites & mobile apps for a latin radio network',
    organization: 'Spanish Broadcasting System',
    profile: 'https://www.linkedin.com/in/danielprada'
  },
  {
    name: {
      first: 'Benji',
      last: 'Power',
    },
    title: 'Chief Operating Officer',
    image: 'images/benji.jpg',
    sector: 'Construction',
    mission: 'I help re-envision Miami-Dade county one building at a time',
    organization: 'McKenzie Construction',
    profile: 'https://www.linkedin.com/in/benjipower/'
  },
  {
    name: {
      first: 'Hannah',
      last: 'Anokye'
    },
    title: 'Digital Brand Associate • VFA Fellow',
    image: 'images/hannah.jpg',
    sector: 'Online Marketing',
    organization: 'Volta Global',
    mission: 'I write stories that celebrate women\'s empowerment & Afro-textured hair',
    profile: 'https://www.linkedin.com/in/hannahanokye/'
  },
  {
    name: {
      first: 'Gabriela',
      last: 'Segnini'
    },
    title: 'Mental Health Counselor Intern',
    image: 'images/gabby.jpg',
    organization: 'University Hospital Pavilion',
    mission: 'I help patients cope with their mental illness',
    sector: 'Mental Health',
    profile: 'https://www.linkedin.com/in/gabrielasegnini/'
  }
];

const SPONSORS: Sponsor[] = [
  {name: 'Miami Country Day School',   url: 'http://www.miamicountryday.org', img:'mcds-logo.png'},
  {name: 'Breakthrough Collaborative', url:'http://www.breakthroughcollaborative.org', img:'btm-logo.png'},
  {name: 'Knoweldge of Careers',       url: 'http://knowledgeofcareers.com', img: 'koc-logo.png'},
  {name: 'University of Miami Toppel Center', url:'http://hireacane.miami.edu', img: 'toppel-logo.png'},
  {name: 'Brown University Latino Alumni Council', url: 'http://bulac.org', img: 'bulac-logo.png'},
  {name: 'Brown Club of Miami', url: 'http://brownclubofmiami.com', img: 'bcom-logo.png'}
];

const HIGHLIGHTS: Highlight[] = [
  {icon: 'lightbulb_outline', color: 'pink-text',   title: 'Learn from Experts', message:'Through interactive activities & personal 1-on-1 conversations.'},
  {icon: 'whatshot',          color: 'yellow-text', title: 'Discover Passions',  message:'Explore new careers you might have not heard of, and meet real people in those fields!'},
  {icon: 'person',            color: 'blue-text',   title: 'Enjoy Fun Company',  message:'Learn, discuss, and talk about the interest that drives you most.'}
];