import Member from "./Member";

export default function ExecutiveTeam() {
  const teams = [
    {
      id: 1,
      designation: "Director  ",
      name: "Madhavi ",
      about:
        "A driven entrepreneur and marketing expert with a deep understanding of customer behavior and market dynamics. With a passion for crafting effective strategies, she excels in connecting with customers in a meaningful way",
      img: "https://i.ibb.co/8PTf915/Madhavi.jpg",
    },
    /*  {
      id: 2,
      designation: "Business Development Manager",
      name: "Hemant Yadav",
      about:
        "A driven entrepreneur and marketing expert with a deep understanding of customer behavior and market dynamics. With a passion for crafting effective strategies, he excels in connecting with customers in a meaningful way. ",
      img: "https://i.ibb.co/mN8kcVV/hemant.jpg",
    }, */
    {
      id: 3,
      name: "Neelam Kota",
      designation: "Marketing Specialist",
      about:
        "A skilled Marketing Specialist with a talent for developing impactful marketing strategies. With a keen understanding of market trends and consumer behavior, she excels at creating engaging campaigns that resonate with the target audience. Neelam's passion for innovation and her ability to drive results make her a valuable asset in the field of marketing.",

      img: "https://i.ibb.co/2gGRfSZ/Neelam.jpg",
    },
    {
      id: 4,
      name: "Sambhrant Bhardwaj",
      designation: "Digital Marketing Executive",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://i.ibb.co/M9G2gLF/sambhrant.jpg",
    },
    {
      id: 5,
      name: "Imran Naazir ",
      designation: "Full Stack Web Developer",
      about:
        "Passionate MERN stack developer with expertise in building robust web applications. Skilled in React.js, Node.js, and MongoDB. Committed to delivering high-quality code and enhancing user experiences. Constantly learning and staying updated with the latest web technologies. Strong problem-solving and collaboration skills. Ready to tackle new challenges and contribute to innovative projects.",
      img: "https://pbs.twimg.com/profile_images/1634609501323284480/DTqAbYru_400x400.jpg",
    },
    {
      id: 6,
      name: "Sneha Joseph",
      designation: "Digital Marketing Executive",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sneha's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D4D03AQEjlFXsoh1qEA/profile-displayphoto-shrink_400_400/0/1667564699722?e=1691020800&v=beta&t=1o6C1qbyZ6rm6Mz-7H1dPE3uWx41AllRulhnc8QRdRc",
    },
    {
      id: 7,
      name: "Bobby Kose",
      designation: "Digital Marketing Executive",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Bobby's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
    },
    {
      id: 8,
      name: "Bharat Lakshkar",
      designation: "Wordpress Developer",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D4D03AQFj0ZMp8JfzDg/profile-displayphoto-shrink_400_400/0/1670245854193?e=1691020800&v=beta&t=zR9S6f02wBK7XpMbtSXIaw-m3i1ngveLD5jdV6qQWcc",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {teams.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </div>
  );
}
