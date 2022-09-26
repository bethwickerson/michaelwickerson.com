// favicon
import favIcon from "./images/favicon.png"
import pic from "./images/mike.jpg"
// images
import digitalImg from "./images/wickersonstudios-digital.jpg"
import analogImg from "./images/wickersonstudios_foundry.jpg"
import fokImg from "./images/wickersonstudios-analog.jpg"
import domImg from "./images/dominion.jpg"
import msgmImg from "./images/MSGM.jpg"
import artImg from "./images/artworks.jpg"
import marsImg from "./images/magnaforma.jpg"
import bookletImg from "./images/booklet.jpg"
import waamImg from "./images/waam.jpg"
import diImg from "./images/di.jpg"
import umkcImg from "./images/umkc.jpg"
import fisherImg from "./images/fisherofmen.jpg"
import ghbookImg from "./images/fangrasshopper.jpg"
import mitImg from "./images/MIT_RAM.jpg"
import myFile from "./images/JR_Imageworks.pdf"
import designImg from "./images/design-technology.jpg"
import designPdf from "./images/design-technology.pdf";

// Skills Icons
import rhinoIcon from "./images/rhino3D.png"
import grasshopperIcon from "./images/grasshopper3d.png"
import revitIcon from "./images/revit.png"
import pythonIcon from "./images/python.png"
import raspPiIcon from "./images/raspberry_pi.png"
import cSharpIcon from "./images/c-sharp.png"
import fusionIcon from "./images/fusion.png"

// Social Icon
import githubIcon from "./images/github.svg"
import youtubeIcon from "./images/youtube.png"
import instagramIcon from "./images/instagram.svg"
import patreonIcon from "./images/patreon.png"
import facebookIcon from "./images/facebook.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Michael Wickerson",
  icon: favIcon,
  titlename: "CEO and Co-Founder at Wickerson Studios",
  headername: "CEO and Co-founder at Wickerson Studios and former Chair of Sculpture at Kansas City Art Institute",
  headerTagline: [
    //Line 1 For Header
    "foundry man,",
    //Line 2 For Header
    "parametric modeler,",
    //Line 3 For Header
    "art facilitator",
  ],
  //   Header Paragraph
  headerParagraph:
    "Wickerson Studios is looking for Visiting, Material, and Creative Sponsors to support a range of emerging and mid-career artists out at Wickerson Studios in Kansas City, Kansas.",

  //Contact Email
  contactEmail: "mike{at}wickersonstudios{dot}com",
  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Design Technology Marathon",
      para:
        "Keynote Speaker for the 2nd Annual Perkins Eastman Technology Marathon on Thursday - October 13, 2022",
      imageSrc: designImg,
      url: designPdf,
    },
    {
      title: "MIT Reality Hack",
      para:
        "XR Hackathon project exploring a memory loss simulation environment to promote empathy with Alzheimer's disease patients",
      imageSrc: mitImg,
      url: "https://devpost.com/software/ram-randomly-accessed-memories",
    },
    {
      title: "Teaching on Patreon and YouTube",
      para:
        "Training digital artists in the Rhino3d environment by teaching parametric and computational design with a focus on scripting in python and C# on the grasshopper canvas",
      imageSrc: digitalImg,
      url: "https://www.patreon.com/MichaelWickerson",
    },
    {
      title: "The Dominion",
      para:
        "Co-development of a conic solver plugin for Rhino 3D, offering a set of tools for generating highly accurate conic sections from fundamental mathematical equations",
      imageSrc: domImg,
      url: "http://the-dominion.dev/",
    },
    {
      title: "Wickerson Studios, Foundry & Art Centre",
      para:
        "CEO and Co-Founder, Wickerson Studios has been in operation for over a decade, supporting both digital and analog artists.  The 14-acre studio has facilitated visiting artists interested in metal casting and ceramics",
      imageSrc: analogImg,
      url: "https://www.instagram.com/wickerson_schmidt_art_centre/",
    },
    {
      title: "Fire Over Kansas",
      para:
        "Collaboration with with photographer Jaroslaw Rodcyz, from the series 'The Art Spaces', a result of the artist's long-term work in the years 2012-2022. Fire Over Kansas captures Wickersons Studios as a combination of a Roman Settlement in ancient Britannia meets Native American structure.",
      imageSrc: fokImg,
      url: myFile,
    },
    {
      title: "MGSM",
      para:
        "Co-organized the educational program sponsored partially and organized by HASSAB, which dreams to change the Arabic world for a better place by building bridges internationally between different cultures and increase the interdisciplinary interaction with different professionals from around the world.",
      imageSrc: msgmImg,
      url: "https://mgsm.org/",
    },
    {
      title: "Magnaforma",
      para:
        "Robotic collaboration with Shawn Brixey and ABB Robotics, public installation",
      imageSrc: marsImg,
      //url: "",
    },
    {
      title: "Drawings, Metal Castings, Installations",
      para:
        "25+ years of visual art making",
      imageSrc: artImg,
      url: "https://www.instagram.com/michaelwickerson",
    },
    {
      title: "Digital Futures, WAAM Robotics Workshop",
      para:
        "Participation in the interdisciplinary workshop organized jointly by the Mechanical Engineering and Architecture Departments at the American University in Cairo (AUC), Egypt. ",
      imageSrc: waamImg,
      url: "https://www.digitalfutures.world/workshops/84.html",
    },
    {
      title: "Fansgrasshopper",
      para: "400+ page computational design publication, full stack development",
      imageSrc: ghbookImg,
      //url: "",
    },
    {
      title: "Visiting Scholar, Dimensional Innovations",
      para:
        "A visiting scholar engagement to access and work at the DI facility on a part-time basis, interact with DI employees, have visibility to DI work and client projects, and hold various discussions around DI's work and capabilities.",
      imageSrc: diImg,
      url: "https://dimin.com/",
    },
    {
      title: "Entrepreneurial Scholars Certificate Program",
      para:
        "Completed the E-Scholars program for the Bloch School of Engineering and Applied Science at the University of Missouri, Kansas City, to gain experience in the field of entrepreneurship.",
      imageSrc: umkcImg,
      url: "https://bloch.umkc.edu/entrepreneurship/",
    },
    {
      title: "Fisher of Men",
      para: "Fisher of Men is a documentary short-film on Wickerson Studios around 2014. Created by Alia Visio Productions, this film was featured at the Kansas International Film Festival in 2017.",
      imageSrc: fisherImg,
      url: "https://www.youtube.com/watch?v=epYSNnVcoak",
    },
    {
      title: "10WICKERSON11 (Booklet)",
      para: "Authenticity has become a key word in my life and it reflects my ability to positively affect the existing world around me. It is a force that can be defined by work and distance, however I recognize that my heart must power the work and the distance covered must be done through personal vision.",
      imageSrc: bookletImg,
      url: "https://www.blurb.com/books/2465412-10wickerson11",
    }
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    {
      title: "Fansgrasshopper, 400+ page computational design publication, full stack development",
      para: ""
      imageSrc:,
      url: "",
    },
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Associate Professor and former Chair of Sculpture at the Kansas City Art Institute. A graduate from the University of Waterloo and York University in Canada, he has exhibited internationally in North America and Europe, collaborating with architects, engineers, programmers, and designers.",
  aboutParaTwo:
    "Recognized as an accomplished Python developer, Wickerson's creative research incorporates mathematics, computer science, computational and parametric design, digital modeling, and programming as they relate to data visualization, machine learning, and robotics.",
  aboutParaThree:
    "Metal Casting Foundry, Rhino 3D Digital Modeling, Grasshopper Node Programming, Python Script Development, Creative Coding for Augmented Reality, Interests in Creative Robotics and Machine Learning",
  aboutImage: pic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: rhinoIcon,
      title: "Rhinoceros 3D",
      para:
        "Robert McNeel and Associates, Level 1, Issued Sept 2021",
      url: "https://www.linkedin.com/company/robert-mcneel-and-associates/"
    },
    {
      img: grasshopperIcon,
      title: "Grasshopper and Rhino: C# Scripting",
      para:
        "LinkedIn Learning, Intermediate level, Issued Jan 2021",
      url: "https://www.linkedin.com/learning/grasshopper-and-rhino-c-sharp-scripting"
    },
    {
      img: revitIcon,
      title: "Revit: Creating C# Plugins",
      para:
        "LinkedIn Learning, Intermediate level, Issued Jan 2021",
      url: "https://www.linkedin.com/learning/revit-creating-c-sharp-plugins"
    },
    {
      img: pythonIcon,
      title: "GhPython Introduction",
      para:
        "Rhino3d, Introductory level, Issued Nov 2020",
      url: "https://www.rhino3d.education/courses"
    },
    {
      img: revitIcon,
      title: "Revit: Generative Design",
      para:
        "LinkedIn Learning, Beginner + Intermediate level, Issued Oct 2020",
      url: "https://www.linkedin.com/learning/certificates/5c049c971a389e6b3fc35fb21d1439f81aa8fbdf7d3bb98679acbe95d0cfea14?trk=share_certificate"
    },
    {
      img: rhinoIcon,
      title: "Design Computing",
      para:
        "FutureLearn, 3D Modeling in Rhinoceros with Python, Rhinoscript University of Michigan, Issued Sept 2020",
      url: "https://www.linkedin.com/company/futurelearn/"
    },
    {
      img: pythonIcon,
      title: "Grasshopper and Rhino: Python Scripting",
      para:
        "LinkedIn Learning, Issued Aug 2020",
      url: "https://www.linkedin.com/learning/certificates/fa08801243742661b181dceda14c982e9b1ff1ebf4ee1cf2198168f92ce1aeb5?trk=share_certificate"
    },
    {
      img: raspPiIcon,
      title: "Raspberry Pi: Essential Training",
      para:
        "LinkedIn Learning, Issued Sep 2019",
      url: "https://www.linkedin.com/learning/grasshopper-and-rhino-python-scripting"
    },
    {
      img: cSharpIcon,
      title: "C# Tutorial",
      para:
        "SoloLearn, Issued Aug 2019",
      url: "https://www.linkedin.com/company/sololearn-inc-/"
    },
    {
      img: fusionIcon,
      title: "Fusion 360",
      para:
        "ArchiStar, 3D Design, Issued Aug 2019",
      url: "https://www.facebook.com/photo.php?fbid=2429268553783070&set=a.2414966431879949&type=3&theater"
    },
    {
      img: grasshopperIcon,
      title: "Grasshopper Code",
      para:
        "Udemy, Transforming simple geometry, Issued Jul 2019",
      url: "https://www.udemy.com/certificate/UC-ZK7QSWFY/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email"
    },
    {
      img: grasshopperIcon,
      title: "Grasshopper Designer",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2415923741784218&set=a.2414966431879949&type=3&theater"
    },
    {
      img: grasshopperIcon,
      title: "Grasshopper Essentials",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2415037391872853&set=a.2414966431879949&type=3&theater"
    },
    {
      img: pythonIcon,
      title: "Python 3 Tutorial Course",
      para:
        "SoloLearn, Issued Jul 2019",
      url: "https://www.sololearn.com/Certificate/1073-14740351/pdf/"
    },
    {
      img: pythonIcon,
      title: "Python Designer",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2422964064413519&set=a.2414966431879949&type=3&theater"
    },
    {
      img: pythonIcon,
      title: "Python Essentials",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2416709068372352&set=a.2414966431879949&type=3&theater"
    },
    {
      img: pythonIcon,
      title: "Python Fundamentals",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2416065265103399&set=a.2414966431879949&type=3&theater"
    },
    {
      img: pythonIcon,
      title: "Python: From Beginner to Intermediate",
      para:
        "Udemy, Issued Jul 2019",
      url: "https://www.udemy.com/certificate/UC-17BON64H/?fbclid=IwAR122IjCpw_bISQpg1xdoqfbDqZPbSjeGrwZq1QPZk1gwNKLcN8tInP016w"
    },
    {
      img: rhinoIcon,
      title: "Rhinoceros Designer",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2417511754958750&set=ms.c.eJwFwYENADAIArCPFkAR~%3Bf~_xtWrGZNznjfHUnOAwW1FZH3ItBrc~-.bps.a.2414966431879949&type=3&theater"
    },
    {
      img: rhinoIcon,
      title: "Rhinoceros Essentials",
      para:
        "ArchiStar, Issued Jul 2019",
      url: "https://www.facebook.com/photo.php?fbid=2415496228493636&set=a.2414966431879949&type=3&theater"
    },
    // {
    //   img: Icon,
    //   title: "",
    //   para:
    //     "",
    //   url: ""
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Subscribe to my channels",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: patreonIcon,
      title: "Patreon",
      url: "https://www.patreon.com/MichaelWickerson",
    },
    {
      img: githubIcon,
      title: "Github",
      url: "https://github.com/mwickerson"
    },
    {
      img: youtubeIcon,
      title: "Youtube",
      url: "https://www.youtube.com/channel/UC7J48Ppcsa6oncp6d29R0xw",
    },
    {
      img: facebookIcon,
      title: "Facebook",
      url: "https://www.facebook.com/michaelwickerson",
    },
    {
      img: instagramIcon,
      title: "Instagram",
      url: "https://www.instagram.com/michaelwickerson",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
