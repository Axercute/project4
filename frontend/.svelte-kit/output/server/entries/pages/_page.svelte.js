import { c as ensure_array_like, b as attr, e as escape_html, d as attr_class, p as pop, a as push } from "../../chunks/index.js";
import "../../chunks/client.js";
const treatmentDisplay = [
  {
    image: "/treatments/treatment1.jpg",
    text: "Spinal Correction program",
    description: "A spinal correction program designed to improve posture, relieve pain, and align the body's structure."
  },
  {
    image: "/treatments/treatment2.jpg",
    text: "Weight Management Program",
    description: "A holistic weight management program that supports metabolism, digestion, and long-term balance."
  },
  {
    image: "/treatments/treatment3.jpg",
    text: "Gynecological conditioning and infertility",
    description: "A treatment plan focusing on gynecological health and infertility using TCM principles."
  },
  {
    image: "/treatments/treatment4.jpg",
    text: "Prevention and treatment of diabetes",
    description: "A preventive and therapeutic approach to managing diabetes naturally and effectively."
  },
  {
    image: "/treatments/treatment5.jpg",
    text: "Prevention and treatment of hypertension",
    description: "A TCM-based program to help prevent and treat hypertension through body regulation."
  },
  {
    image: "/treatments/treatment6.jpg",
    text: "Cupping/Scraping",
    description: "Traditional cupping and scraping therapies to stimulate circulation and remove stagnation."
  },
  {
    image: "/treatments/treatment7.jpg",
    text: "TCM Tuina",
    description: "Classical TCM Tuina massage to restore energy flow and relieve musculoskeletal issues."
  },
  {
    image: "/treatments/treatment8.jpg",
    text: "Special Moxibustion Program",
    description: "A specialized moxibustion program using heat therapy to boost immunity and vitality."
  }
];
const problemDisplay = [
  {
    image: "/problems/problem1.jpg",
    text: "Headache",
    description: "A common condition involving pain or discomfort in the head or upper neck, often caused by stress, tension, or underlying health issues."
  },
  {
    image: "/problems/problem2.jpg",
    text: "Insomnia",
    description: "A sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early, leading to daytime fatigue."
  },
  {
    image: "/problems/problem3.jpg",
    text: "Frozen Shoulder",
    description: "A condition causing stiffness, pain, and limited range of motion in the shoulder joint, often developing gradually over time."
  },
  {
    image: "/problems/problem4.jpg",
    text: "Menstrual irregularities",
    description: "Disruptions in the menstrual cycle, such as missed periods, heavy bleeding, or severe cramps, often linked to hormonal imbalance or stress."
  },
  {
    image: "/problems/problem5.jpg",
    text: "Neck Pain",
    description: "Pain or stiffness in the neck area that can result from poor posture, muscle strain, or spinal issues."
  },
  {
    image: "/problems/problem6.jpg",
    text: "Back Pain",
    description: "Discomfort or aching in the lower or upper back, commonly caused by muscle strain, injury, or spinal problems."
  },
  {
    image: "/problems/problem7.jpg",
    text: "Constipation",
    description: "A digestive issue where bowel movements are infrequent or difficult to pass, often accompanied by bloating or abdominal discomfort."
  },
  {
    image: "/problems/problem8.jpg",
    text: "Impotency",
    description: "The inability to achieve or maintain an erection sufficient for sexual activity, often due to physical or psychological factors."
  },
  {
    image: "/problems/problem9.jpg",
    text: "Sprained Ankle",
    description: "An injury involving stretched or torn ligaments in the ankle, usually caused by sudden twisting or rolling."
  },
  {
    image: "/problems/problem10.jpg",
    text: "Tennis Elbow",
    description: "Pain and inflammation around the outer elbow due to overuse of forearm muscles, often from repetitive arm motions."
  },
  {
    image: "/problems/problem11.jpg",
    text: "Stroke",
    description: "A serious medical condition where blood flow to part of the brain is interrupted, leading to potential brain damage and physical impairment."
  },
  {
    image: "/problems/problem12.jpg",
    text: "Knee Pain",
    description: "Pain or discomfort in the knee joint that can result from injury, arthritis, or overuse."
  }
];
function _page($$payload, $$props) {
  push();
  let descriptionUpdate = "";
  let textUpdate = "";
  console.log("http://localhost:3000");
  let carousel = [
    "picture1.jpg",
    "picture2.jpg",
    "picture3.jpg",
    "picture4.jpg"
  ];
  let currentIndex = 0;
  const each_array = ensure_array_like(treatmentDisplay);
  const each_array_1 = ensure_array_like(problemDisplay);
  $$payload.out += `<div class="relative w-full h-64 md:h-100 xl:h-180"><!---->`;
  {
    $$payload.out += `<img${attr("src", `/carousel/${carousel[currentIndex]}`)} alt="Tui na" class="w-full h-full object-cover absolute"${attr("key", carousel[currentIndex])}/>`;
  }
  $$payload.out += `<!----> <button class="absolute top-[80%] left-[50%] rounded-2xl text-white bg-red-800 shadow translate-x-[-50%] translate-y-[-50%] hover:bg-red-400">Book Appointment</button></div> <div class="flex-center text-white bg-red-800 font-semibold">Treatment Solution For:</div> <div class="flex flex-row flex-wrap justify-center items-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { image, text, description } = each_array[$$index];
    $$payload.out += `<div class="relative group w-40 h-40 flex justify-center items-center text-center m-2 hover:cursor-pointer"><img${attr("src", image)} alt="digestion" class="rounded-2xl absolute w-full h-full"/> <div class="absolute w-full h-full bg-black/50 rounded-2xl group-hover:bg-black/20"></div> <div class="text-white font-semibold absolute">${escape_html(text)}</div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex-center text-white bg-red-800 font-semibold">Problems we tackle For:</div> <div class="flex flex-row flex-wrap justify-center items-center"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let { image, text, description } = each_array_1[$$index_1];
    $$payload.out += `<div class="relative group w-40 h-40 flex justify-center items-center text-center m-2 hover:cursor-pointer"><img${attr("src", image)} alt="digestion" class="rounded-2xl absolute w-full h-full"/> <div class="absolute w-full h-full bg-black/50 rounded-2xl group-hover:bg-black/20"></div> <div class="text-white font-semibold absolute">${escape_html(text)}</div></div>`;
  }
  $$payload.out += `<!--]--></div> <div${attr_class(`opacity-90 transition-[left] duration-500 ease-in-out bg-gradient-to-br from-[#7d1b1f] to-red-800 h-1/3 w-1/2 z-1 flex-center
 text-md font-semibold text-white fixed md:text-3xl ${"-left-full"} top-[50%] absolute`)}><div class="mx-2"><div class="w-6 h-6 mt-5 absolute cursor-pointer right-2 top-2"><span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span> <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span></div> <strong>${escape_html(textUpdate)}</strong><br/><br/> ${escape_html(descriptionUpdate)}</div></div>`;
  pop();
}
export {
  _page as default
};
