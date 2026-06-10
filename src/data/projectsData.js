import vishnu1 from "../assets/vishnu-sadan-img/vishnu-img-1.jpeg";
import vishnu2 from "../assets/vishnu-sadan-img/vishnu-img-2.jpeg";
import vishnu3 from "../assets/vishnu-sadan-img/vishnu-img-3.jpeg";
import vishnu4 from "../assets/vishnu-sadan-img/vishnu-img-4.jpeg";
import vishnu5 from "../assets/vishnu-sadan-img/vishnu-img-5.jpeg";
import vishnu6 from "../assets/vishnu-sadan-img/vishnu-img-6.jpeg";

import shanta1 from "../assets/shanta-complex-img/shanta-img-1.jpeg";
import shanta2 from "../assets/shanta-complex-img/shanta-img-2.jpeg";

import jhapa1 from "../assets/jhapa-solar-img/jhapa-solar-1.jpeg";
import jhapa2 from "../assets/jhapa-solar-img/jhapa-solar-2.jpeg";
import jhapa3 from "../assets/jhapa-solar-img/jhapa-solar-3.jpeg";
import jhapa4 from "../assets/jhapa-solar-img/jhapa-solar-4.jpeg";
import jhapa5 from "../assets/jhapa-solar-img/jhapa-solar-5.jpeg";
import jhapa6 from "../assets/jhapa-solar-img/jhapa-solar-6.jpeg";

import butwal1 from "../assets/butwal-solar-img/butwal-1.jpg";
import butwal3 from "../assets/butwal-solar-img/butwal-3.jpg";
import butwal4 from "../assets/butwal-solar-img/butwal-4.png";
import butwal5 from "../assets/butwal-solar-img/butwal-5.jpg";

import darbar1 from "../assets/darbar-img/darbar-1.jpg";
import darbar2 from "../assets/darbar-img/darbar-2.jpg";
import darbar3 from "../assets/darbar-img/darbar-3.jpg";
import darbar4 from "../assets/darbar-img/darbar-4.jpg";
import darbar5 from "../assets/darbar-img/darbar-5.jpg";

import sunmai1 from "../assets/sunmai-img/sunmai-1.jpeg";
import sunmai2 from "../assets/sunmai-img/sunmai-2.jpeg";
import sunmai3 from "../assets/sunmai-img/sunmai-3.jpeg";
import sunmai4 from "../assets/sunmai-img/sunmai-4.jpeg";

export const projectsData = {
  commercial: [
    {
      id: 1,
      title: "Vishnu Sadan",
      location: "Pingalasthan Road, Kathmandu",
      capacity: "150 kWp",
      type: "Rooftop Installation",
      image: vishnu1,
      gallery: [vishnu1, vishnu2, vishnu3, vishnu4, vishnu5, vishnu6],
      detailedDescription:
        "The solar installation project at Vishnu Sadan, owned by Umesh Raj Shiwakoti, is located on Pingalasthan Road, Kathmandu. The system has a capacity of 50.7 kWp and is spread across 392 square feet, reflecting efficient utilization of space for optimal energy production. With an impressive annual output of 73.81 MWh, the project contributes significantly to reducing electricity costs, providing monthly savings of Rs. 67,650. Over ten years, the savings are estimated at Rs. 8,11,800, showcasing its financial viability. This project underscores a commitment to sustainable energy, benefiting both the environment and economic well-being by significantly lowering reliance on traditional power sources.",
      year: "2024",
      client: "Vishnu Sadan Pvt. Ltd",
      panels: "280 panels",
      inverter: "SMA Sunny Tripower",
      savings: "40% monthly",
      status: "Operational",
      category: "commercial",
    },
    {
      id: 2,
      title: "Shanta Complex PV plant",
      location: "Putalisadak, Kathmandu",
      capacity: "85 kWp",
      type: "Rooftop Installation",
      image: shanta1,
      gallery: [shanta1, shanta2],
      detailedDescription:
        "The project, located at Putalisadak Road, Kathmandu, is a 50.7 kWp solar installation covering an area of 392 square feet. It has an impressive yearly energy output of 73.81 MWh, contributing to significant monthly savings of Rs. 67,650 for the owner, Vishnu Sadan (Umesh Raj Shiwakoti). Over a span of 10 years, the total savings are estimated to reach Rs. 8,11,800 annually making it a highly efficient and cost-effective renewable energy solution. This project, completed in 2024, highlights the potential for solar energy to provide sustainable power and substantial financial benefits.",
      year: "2024",
      client: "Shanta Complex",
      panels: "160 panels",
      inverter: "Huawei SUN2000",
      savings: "35% monthly",
      status: "Operational",
      category: "commercial",
    },
  ],
  industrial: [
    {
      id: 3,
      title: "Dabur Nepal Pvt.Ltd",
      location: "Tokani, Jeetpur, Simara",
      capacity: "500 kWp",
      type: "Ground-Mounted System",
      image: darbar1,
      gallery: [darbar1, darbar2, darbar3, darbar4, darbar5],
      detailedDescription:
        "Dabur Nepal Pvt. Ltd. is established with objectives to provide pharmaceutical and personal care products in the market of Nepal. The Company offers a range of herbal products such as health supplements, digestive system and cough and cold medicine, tooth paste, energizers, shampoo, hair oil, skin care, food, and home care products.                               The Project located at Dabur Nepal Ltd. Rampur Tokani, Jeetpur simara sub metropolitan Bara Nepal is 736 kWp rooftop solar installation covering an area 7416 Square meter. It has an impressive yearly energy output of 1010 Mwh, contributing to significant monthly saving Rs 700000 for the owner. Over a span of 10 years the total saving estimated to reach Rs. 84000000 making it is highly efficient and cost effective renewable energy solution. The project completed in 2025 highlight the potential for the solar energy to provide sustainable power and substantial financial benefits.",
      year: "2025",
      client: "Dabur Nepal Pvt. Ltd",
      panels: "920 panels",
      inverter: "SMA Central Inverter",
      savings: "45% monthly",
      status: "Operational",
      category: "industrial",
    },
    {
      id: 4,
      title: "Sunmai Water Solar PV Project",
      location: "Bushashanti, Jhapa",
      capacity: "50.7 kWp",
      type: "Ground-Mounted + Rooftop",
      image: sunmai1,
      gallery: [sunmai1, sunmai2, sunmai3, sunmai4],
      detailedDescription:
        "Sunmai Water Solar PV Project is located at roof of Sunmai Water Pvt. Ltd., Budhashanti, Jhapa, Koshi province Nepal. The plant is owned by Sunmai Water Pvt. Ltd. The capacity of the project is 50.73KWp. The plant came in operation in April 2024. This plant has occupied approx. 6000 sq. feet roof area. There are 114 number of solar modules each having capacity 445Wp and a single unit of string inverter of 40 KW is used to control PV voltage and converter it into DC. to AC. The generation voltage of a single module is 41.62V and 19 number of modules is connected in series to form a single string and total number of strings is 6. Output from string inverter is 3-Phase 400 V which is supplied to the distribution box of Sunmai plant through ACDB. Janda devi Nepal Energy has successfully completed the analysis, desk study, DFS preparation, installation testing and commissioning of Sunmai Water PV plant.",
      year: "2024",
      client: "Sunmai Water Pvt. Ltd",
      panels: "114  panels",
      inverter: "HUAWEI -40kW",
      savings: "47,000/monthly",
      status: "Operational",
      category: "industrial",
    }
  ],
  utility: [
    {
      id: 7,
      title: "Jhapa Solar PV Project",
      location: "Shivasaktashi, Jhapa",
      capacity: "12 MWp",
      type: "Utility-Scale Solar Farm",
      image: jhapa1,
      gallery: [jhapa1, jhapa2, jhapa3, jhapa4, jhapa5, jhapa6],
      detailedDescription:
        "Jhapa Solar PV Project is located at Shivasaktashi municipality of Jhapa District in Nepal. The plant is owned by Jhapa Energy Ltd. The capacity of the project is 10MW and is the one of the largest grid connected solar project for 2023 in Nepal. The plant came in operation in December 2023. This plant has occupied 15.57 hector land. There are 22232 solar modules each having capacity 540Wp and 2 units of 5MVA invertor. The generation voltage of the plant is 690V and is upgraded into 33000V matching the grid voltage of utility system. The generated power is connected to 33 kV Panchghachi distribution centre of Nepal Electricity Authority at a distance of 0.75km. Janda devi Nepal Energy has successfully completed the erection, installation testing and commissioning of Jhapa Energy Solar Project, substation and its transmission line.",
      year: "2024",
      client: "Nepal Electricity Authority",
      panels: "22,000 panels",
      inverter: "SMA Medium Voltage",
      savings: "Grid Supply",
      status: "Operational",
      category: "utility",
    },
    {
      id: 8,
      title: "Butwal Solar PV Project",
      location: "Tillottama, Butwal",
      capacity: "8.5 MWp",
      type: "Utility-Scale Solar Farm",
      image: butwal1,
      gallery: [butwal1, butwal3, butwal4, butwal5],
      detailedDescription:
        "Butwal Solar PV Project is located at Tillottama municipality of Rupandehi District in Nepal. The plant is owned by Ridi Hydropower Development Company Ltd. The capacity of the project is 8.5MW and is the first largest grid connected solar project for 2020 in Nepal. The plant came in operation in October 2020. This plant has occupied 17.2 hector land. There are 31280 solar modules each having capacity 330Wp and 10 units of 850kVA invertors. The generation voltage of the plant is 690V and is upgraded into 33000V matching the grid voltage of utility system. The generated power is connected to 33 kV Amuwa Substation of Nepal Electricity Authority at a distance of 7.4km. Janda devi Nepal Energy has successfully completed the erection, installation and testing of Butwal Solar Project, substation and its transmission line.",
      year: "2020",
      client: "Lumbini Development Trust",
      panels: "18,500 panels",
      inverter: "Huawei Smart PV",
      savings: "Grid Supply",
      status: "Operational",
      category: "utility",
    },
  ],
};
