import { ReactNode } from 'react';

interface HistoryItem {
  title: string;
  description: string | ReactNode;
}
export const historyList: HistoryItem[] = [
  {
    title: 'Childhood',
    description: (
      <span>
        {`
          I was born in 1994 with the name Paolo Vincent Julian, and
          I had an awesome childhood in Baguio City, Philippines.
          The weather there was always cool, which was pretty
          amazing! As a kid, I was totally into Math, just like
          solving the most complex equations was my superpower. I
          was also captivated by epic anime series like "Flame of
          Recca," "Ghost Fighter," and of course, "Naruto." Those
          shows fueled my imagination with their thrilling
          adventures and awesome battles.
        `}
        <br />
        <br />
        {`
          But it wasn't just anime that shaped my interests. Epic
          movies like "The Lord of the Rings" and "The Matrix" had a
          profound impact on me. These films fueled my curiosity
          about the blend of fantasy, technology, and hacking. I
          mean, who could forget the iconic code animations from
          "The Matrix"? They were beyond cool, more like
          mind-blowingly awesome, and I'd be lying if I said they
          didn't play a big part in inspiring me to become a
          programmer. 🌟💻😎
        `}
      </span>
    ),
  },
  {
    title: 'Pre-College',
    description: (
      <span>
        {`
        I was always the top student during my elementary days. I dedicated a
        lot of time to studying and didn't have much time to play games.
        However, when I entered high school, I gained more freedom and became
        addicted to playing video games, particularly StarCraft and Dota. As a
        result, my grades dropped significantly, and I experienced burnout from
        studying. Nevertheless, I managed to pass high school without
        encountering many academic problems.
        `}
      </span>
    ),
  },
  {
    title: 'College',
    description: (
      <span>
        {`
        When I first stepped into college, I was totally unsure about what to
        study. The whole Information Technology (I.T) and Computer Science thing
        hadn't even crossed my mind, because I was pretty much fixated on video
        games. That's where my head was at most of the time. My dad suggested I
        give Electronic and Communications Engineering a shot, pointing out the
        potential fat paycheck and my knack for math.
        `}
        <br />
        <br />
        {`
        But here's the kicker: I wasn't feeling it. I ended up dropping most of
        my classes, except for one glimmer of hope – a computer-related course
        that covered stuff like Entity Relationship Diagrams (ERD) and the
        basics of programming. It was like a lightbulb moment 💡. I realized
        that I'd always had a thing for programming.
        `}
        <br />
        <br />
        {`
        So, I decided to make a switch and moved to a different school that
        focuses Information Technology and Computer Science. I opted for a major
        of Network Security because, well, hacking sounded pretty cool back then
        😎.
        `}
      </span>
    ),
  },
  {
    title: 'Training',
    description: (
      <span>
        {`
        I started to ace all the computer-related subjects and things were
        looking up. But, the real revelation hit me during my On-the-Job
        Training (OJT). Network security, as it turned out, wasn't my jam. But I
        was also pretty darn good at it. In fact, they even wanted me to stick
        around after my OJT was done. The thing is, as much as I excelled at it,
        I just wasn't feeling it.
        `}
        <br />
        <br />
        {`
        So, I dove into self-study mode and spent a month mastering web
        development. Thanks to some hard work and dedication, I snagged a gig as
        a Junior Application Developer. That's where I am now, living the dream,
        doing what I love, and coding away with a big grin on my face! 🖥️💻
        `}
      </span>
    ),
  },
];

interface CareerItem {
  companyName: string;
  year: string;
  description: string | ReactNode;
}
export const careerList: CareerItem[] = [
  {
    companyName: 'Utalk',
    year: '2017-2019',
    description: (
      <span>
        {`
        In 2017, I began my journey as a Junior Application Developer, full of
        excitement, “over-engineered” stuff and a pinch of 'I-know-it-all'
        attitude. Little did I know that this was the start of something
        wonderful. Working with an incredible team, we laughed through long
        hours and learned together. During this phase, I accumulated invaluable
        experience, particularly when I ventured into pioneering the development
        of single-page applications using Vue JS, at a time when it was still a
        relatively new technology.
        `}
      </span>
    ),
  },
  {
    companyName: 'YNS Philippines Inc.',
    year: '2019-2021',
    description: (
      <span>
        {`
        In 2019, after a short break to visit my mother in the Cayman Islands
        and tour Singapore for two months, I joined YNS Philippines Inc as a
        Software Engineer. In this role, I had a fantastic mentor who believed
        in keeping things simple and practical. He was a genius, and he inspired
        me to embrace a simpler lifestyle. Apart from that, I learned about
        microservices and hybrid mobile technology, broadening my skills.
        `}
      </span>
    ),
  },
  {
    companyName: 'Yondu Inc.',
    year: '2021-2023',
    description: (
      <span>
        {`
        In 2021, I sought to focus on front-end development, leading me to
        Yondu, where I assumed the role of Software Engineer (Front-end). My
        time at Yondu has been a significant learning experience. I introduced
        technologies like TypeScript, Tailwind CSS, Server-Side Rendering,
        Static Site Generation, and mono-repo structures. These additions
        represent the modern approach to web development, and I'm excited to
        continue shaping my career in this direction.
        `}
      </span>
    ),
  },
  {
    companyName: 'Accelo',
    year: '2023-Present',
    description: (
      <span>
        {`
        In 2023, as much as I'd like to continue at Yondu, they were
        transitioning back to office work, which posed challenges for me. While
        exploring job opportunities, I found that the average salary for
        engineers was higher, almost double my current income. I promptly
        applied for a position at Accelo, and I can confidently say that
        everything here is outstanding! The team is passionate, everyone works
        with a smile, and they're incredibly approachable. The codebase is
        well-maintained and unit-tested, code reviews are thorough, and
        everything is meticulously planned. Plus, it's entirely remote, which is
        a perfect fit for me. As of writing this article in October 2022, I'm in
        my first month at Accelo, and it seems like I won't be jumping companies
        again because I love it here.
        `}
      </span>
    ),
  },
];

interface InterestsItem {
  title: string;
  description: string | ReactNode;
}
export const interestsList: InterestsItem[] = [
  {
    title: 'Music Production',
    description: `I aspire to be like John Mayer, with his mesmerizing guitar riffs, decent singing, and profound musical knowledge; however, I soon realized that music production is also quite challenging. So, I decided to take a step back, slow down, and focus on it at my own pace for now. `,
  },
  {
    title: 'Gaming',
    description: `I used to be quite the gaming enthusiast, and that passion still lingers today, although not as intensely. Now, it serves as a stress-reliever and a way to balance my time and relax my mind. Currently, you'll find me enjoying Valorant, Dota 2, and offline games.`,
  },
  {
    title: 'Cooking',
    description: `I'm a huge fan of Asian cuisine, and I love it so much that I decided to learn how to cook it myself. Some of my favorites include Masala, Beef, and Wonton Noodles, as well as Szechuan Noodles. I studied how to make hand made noodles and wonton wraps and all I can say is it is totally worth it.`,
  },
  {
    title: 'Robotics and A.I.',
    description: `I'm into AI and robotics because of “Cyberpunk” and “The Matrix”. It's a world where tech and humans blend, with robots and AI blurring the line between them. I explore robots, AI ethics, and how they can make a real-world difference, all inspired by those cool cyberpunk stories.`,
  },
  {
    title: 'Hacking',
    description: `Hacking, to me, is like being a modern-day detective in the digital world. It's about using technology to protect against criminals and corruption rather than personal gain (or is it? JK 😅).
    I'm currently motivated by the series “Mr. Robot”, which has rekindled my passion for hacking, reminiscent of the excitement I felt as a child watching The Matrix.”`,
  },
];
