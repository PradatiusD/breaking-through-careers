import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Breaking Through Careers';
  eventDate = 'Sat, February 18th';
  eventTime = '8:30am-1:30pm';
  tagline = 'A 1 day meet & greet between awesome South Florida middle school kids & professionals';
  eventLocation = 'Miami Country Day School';
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
}

export class Volunteer {
  name: string;
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
    name: 'Kierra Smith', 
    title: 'Senior Site Director',
    image: 'images/kierra.png',
    sector: 'Education',
    mission: 'I engage young minds with new educations', 
    organization: 'Breakthrough Collaborative',
    profile: 'https://www.breakthroughmiami.org/portal/leadership-team'
  },
  {
    name: 'Kimberly Arredondo',
    title: 'Associate Director',
    image: 'images/kimberly.jpg',
    sector: 'Education',
    mission: 'I direct our schools research and funding initiatives',
    organization: 'Ransom Everglades School',
    profile: 'https://www.linkedin.com/in/kimberly-arredondo-ba614651'
  },
  {
    name: 'Michael Ragheb',
    title: 'Founder & CEO',
    image: 'images/michael.jpg',
    sector: 'Education',
    mission: 'I engage kids with career opportunities and teach at the University of Miami',
    organization: 'Ransom Everglades School',
    profile: 'https://www.linkedin.com/in/michael-ragheb-52980567'
  },
   {
    name: 'Daniel Prada',
    title: 'Lead Software Engineer',
    image: 'images/daniel.jpg',
    sector: 'Information Technology',
    mission: 'I build websites & mobile apps',
    organization: 'Spanish Broadcasting System',
    profile: 'https://www.linkedin.com/in/danielprada'
  },
];

const SPONSORS: Sponsor[] = [
  {name: 'Breakthrough Collaborative', url:'http://www.breakthroughcollaborative.org/'},
  {name: 'Brown Club of Miami', url: 'http://brownclubofmiami.com/'},
  {name: 'Knoweldge of Careers', url: 'http://knowledgeofcareers.com/'}
];

const HIGHLIGHTS: Highlight[] = [
  {icon: 'lightbulb_outline', color: 'pink-text', title: 'Learn from Experts',   message:'Through interactive activities & personal 1-on-1 face time, you will meet local leaders'},
  {icon: 'whatshot',          color: 'yellow-text',  title: 'Discover Passions', message:'Explore new careers you might have not heard of, and meet real people in those fields!'},
  {icon: 'person',            color: 'blue-text', title: 'Enjoy Good Company',   message:'Learn, discuss, and talk about the interest that drives you most.'}
];