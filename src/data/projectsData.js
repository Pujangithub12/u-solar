// Used for projects that don't have real photos uploaded yet
const placeholderImage =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop";

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

import aster1 from "../assets/india project/industrial/aster-medcity-1.jpg";
import aster2 from "../assets/india project/industrial/aster-medcity-2.jpg";
import aster3 from "../assets/india project/industrial/aster-medcity-3.jpg";

import maduraCoats from "../assets/india project/industrial/madura-coats.webp";
import shreeCement from "../assets/india project/industrial/shree-cement.webp";
import coalIndiaImg from "../assets/india project/government/COAL-INDIA-LIMITED.webp";

import bigBasketImg from "../assets/india project/commercial/Big-Basket.webp";
import decathlonImg from "../assets/india project/commercial/Decathlon.webp";
import dmartImg from "../assets/india project/commercial/Dmart.webp";
import indiQubeImg from "../assets/india project/commercial/Kochiimetro.webp";

import galaxy1 from "../assets/Galaxy Garden/galaxy (1).jpeg";
import galaxy2 from "../assets/Galaxy Garden/galaxy (2).jpeg";
import galaxy3 from "../assets/Galaxy Garden/galaxy (3).jpeg";

import holiday1 from "../assets/Hotel Holiday Inn Express/hotel-holiday (1).jpeg";
import holiday2 from "../assets/Hotel Holiday Inn Express/hotel-holiday (2).jpg";
import holiday3 from "../assets/Hotel Holiday Inn Express/hotel-holiday (3).jpeg";
import holiday4 from "../assets/Hotel Holiday Inn Express/hotel-holiday (4).jpg";

import college1 from "../assets/College of Medical Science/college-medical (1).jpeg";
import college2 from "../assets/College of Medical Science/college-medical (2).jpeg";

export const projectsData = {
  commercial: [
    {
      id: 1,
      title: "Shanta Complex PV Plant (Vishnu Sadan)",
      location: "Putalisadak, Kathmandu",
      capacity: "50.7 kWp",
      type: "Rooftop Installation",
      image: vishnu1,
      gallery: [
        vishnu1,
        vishnu2,
        vishnu3,
        vishnu4,
        vishnu5,
        vishnu6,
        shanta1,
        shanta2,
      ],
      detailedDescription:
        "The solar installation project at Shanta Complex (Vishnu Sadan), owned by Umesh Raj Shiwakoti, is located at Putalisadak, Kathmandu. The system has a capacity of 50.7 kWp and is spread across 392 square feet, reflecting efficient utilization of space for optimal energy production. With an impressive annual output of 73.81 MWh, the project contributes significantly to reducing electricity costs, providing monthly savings of Rs. 67,650. Over ten years, the savings are estimated at Rs. 8,11,800, showcasing its financial viability. This project underscores a commitment to sustainable energy, benefiting both the environment and economic well-being by significantly lowering reliance on traditional power sources.",
      year: "2024",
      client: "Vishnu Sadan Pvt. Ltd",
      panels: "280 panels",
      inverter: "SMA Sunny Tripower",
      savings: "40% monthly",
      status: "Operational",
      category: "commercial",
      country: "Nepal",
    },
    {
      id: 9,
      title: "Kutumba Hotel Rooftop PV",
      location: "Bhakundol, Lalitpur",
      capacity: "12 kWp",
      type: "Rooftop Installation",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "Kutumba Hotel Rooftop PV is a 12 kWp rooftop solar installation at Bhakundol, Lalitpur, supplying clean energy to reduce the hotel's grid electricity consumption and operating costs.",
      year: "2022",
      client: "Kutumba Hotel",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "Nepal",
    },
    {
      id: 10,
      title: "College of Medical Sciences Rooftop",
      location: "Bharatpur, Chitwan",
      capacity: "500 kWp",
      type: "Rooftop Installation",
      image: college1,
      gallery: [college1, college2],
      detailedDescription:
        "A 500 kWp rooftop solar installation at the College of Medical Sciences, Bharatpur, Chitwan, delivering renewable power to support the institution's campus and hospital facilities.",
      year: "Ongoing",
      client: "College of Medical Sciences",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Under Construction",
      category: "commercial",
      country: "Nepal",
    },
    {
      id: 11,
      title: "Galaxy Garden Resort Rooftop",
      location: "Yagyapuri, Bharatpur",
      capacity: "100 kWp",
      type: "Rooftop Installation",
      image: galaxy1,
      gallery: [galaxy1, galaxy2, galaxy3],
      detailedDescription:
        "A 100 kWp rooftop solar installation at Galaxy Garden Resort, Yagyapuri, Bharatpur, reducing the resort's reliance on grid electricity through on-site solar generation.",
      year: "Ongoing",
      client: "Galaxy Garden Resort",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Under Construction",
      category: "commercial",
      country: "Nepal",
    },
    {
      id: 12,
      title: "Hotel Holiday Inn Express Rooftop",
      location: "Naxal, Kathmandu",
      capacity: "60 kWp",
      type: "Rooftop Installation",
      image: holiday1,
      gallery: [holiday1, holiday2, holiday3, holiday4],
      detailedDescription:
        "A 60 kWp rooftop solar installation at Hotel Holiday Inn Express, Naxal, Kathmandu, providing clean, reliable power for the hotel's operations.",
      year: "2026",
      client: "Hotel Holiday Inn Express",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "Nepal",
    },
    {
      id: 25,
      title: "Big Basket Solar Project",
      location: "PAN India",
      capacity: "3.8 MWp",
      type: "Rooftop Installation",
      image: bigBasketImg,
      gallery: [bigBasketImg],
      detailedDescription:
        "With rapid growth and expansion big basket faced escalating energy consumption. Big Basket decided to go Solar in their warehouses to cut down on operational costs and comply with ESG regulations. U-Solar helped Big Basket to transition their energy consumption to solar energy of their warehouses PAN India.",
      year: "2024",
      client: "Big Basket",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "India",
    },
    {
      id: 26,
      title: "Decathlon Solar Project",
      location: "PAN India",
      capacity: "803 kWp",
      type: "Rooftop Installation",
      image: decathlonImg,
      gallery: [decathlonImg],
      detailedDescription:
        "Decathlon being one of the sports retail chain in India decided to adopt solar to support the ESG goals of the company. The company wanted to explore options with lesser capital expenditure. U-Solar provided Decathlon with zero investment option (OPEX) and energy price much lower than the standard DISCOM rates. This helped decathlon with quick transition to solar for 8 of their retail outlets.",
      year: "2024",
      client: "Decathlon",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "India",
    },
    {
      id: 27,
      title: "IndiQube Solar Project",
      location: "Karnataka",
      capacity: "2.6 MWp",
      type: "Rooftop Installation",
      image: indiQubeImg,
      gallery: [indiQubeImg],
      detailedDescription:
        "IndiQube is an end-to-end office space provider based out of Bengaluru, providing innovative and cost-effective solutions to businesses. IndiQube decided to transform themselves to prosumers by adopting solar for their office & other buildings. U-Solar helped IndiQube to achieve their vision and installed cost-effective solar solutions across multiple sites across Bengaluru.",
      year: "2024",
      client: "IndiQube",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "India",
    },
    {
      id: 28,
      title: "DMart Solar Project",
      location: "PAN India",
      capacity: "2 MWp",
      type: "Rooftop Installation",
      image: dmartImg,
      gallery: [dmartImg],
      detailedDescription:
        "DMart is a leading supermarket chain in India, offering a wide range of home and personal products at competitive prices. U-Solar helped DMart to transition to affordable, reliable and clean power by installing 2MWp of Rooftop Solar which saves them in energy bills every year.",
      year: "2024",
      client: "DMart",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "commercial",
      country: "India",
    },
  ],
  industrial: [
    {
      id: 3,
      title: "Dabur Nepal Pvt. Ltd. Solar",
      location: "Jeetpur Simara",
      capacity: "976 kWp",
      type: "Ground-Mounted System",
      image: darbar1,
      gallery: [darbar1, darbar2, darbar3, darbar4, darbar5],
      detailedDescription:
        "Dabur Nepal Pvt. Ltd. is established with objectives to provide pharmaceutical and personal care products in the market of Nepal. The Company offers a range of herbal products such as health supplements, digestive system and cough and cold medicine, tooth paste, energizers, shampoo, hair oil, skin care, food, and home care products. The project, located at Dabur Nepal Ltd. Rampur Tokani, Jeetpur Simara Sub-Metropolitan, Bara, Nepal, is a 976 kWp rooftop solar installation covering an area of 7,416 square meters. It has an impressive yearly energy output of 1,010 MWh, contributing to significant monthly savings of Rs. 700,000 for the owner. Over a span of 10 years, the total savings are estimated to reach Rs. 84,000,000, making it a highly efficient and cost-effective renewable energy solution. 736 kWp of the plant has been completed and commissioned, with the remaining 240 kWp currently under construction.",
      year: "2025",
      client: "Dabur Nepal Pvt. Ltd",
      panels: "920 panels",
      inverter: "SMA Central Inverter",
      savings: "45% monthly",
      status: "736 kWp Completed; 240 kWp Ongoing",
      category: "industrial",
      country: "Nepal",
    },
    {
      id: 4,
      title: "Sunmai Water Solar PV Project",
      location: "Budhashanti, Jhapa",
      capacity: "50.73 kWp",
      type: "Ground-Mounted + Rooftop",
      image: sunmai1,
      gallery: [sunmai1, sunmai2, sunmai3, sunmai4],
      detailedDescription:
        "Sunmai Water Solar PV Project is located on the roof of Sunmai Water Pvt. Ltd., Budhashanti, Jhapa, Koshi Province, Nepal. The plant is owned by Sunmai Water Pvt. Ltd. The capacity of the project is 50.73 kWp. The plant came into operation in April 2024. This plant has occupied approx. 6,000 sq. feet of roof area. There are 114 solar modules, each having a capacity of 445 Wp, and a single unit of a 40 kW string inverter is used to control PV voltage and convert it from DC to AC. The generation voltage of a single module is 41.62V, and 19 modules are connected in series to form a single string, with a total of 6 strings. Output from the string inverter is 3-phase 400V, which is supplied to the distribution box of the Sunmai plant through the ACDB. Janda Devi Nepal Energy has successfully completed the analysis, desk study, DFS preparation, installation, testing, and commissioning of the Sunmai Water PV plant.",
      year: "2024",
      client: "Sunmai Water Pvt. Ltd",
      panels: "114 panels",
      inverter: "HUAWEI -40kW",
      savings: "47,000/monthly",
      status: "Completed (April 2024)",
      category: "industrial",
      country: "Nepal",
    },
    {
      id: 22,
      title: "Aster Medicity Solar PV Project",
      location: "Kerala",
      capacity: "8.5 MWp",
      type: "Ground-Mounted System",
      image: aster1,
      gallery: [aster1, aster2, aster3],
      detailedDescription:
        "Aster Medicity is a leading hospital chain in India. Aster opted for a 8.5 MWp ground mount solar to reduce its operational costs and carbon footprint. U-Solar was able to understand their requirements and tailor a clean energy pathway for their energy transition over the state.",
      year: "2024",
      client: "Aster Medicity",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "industrial",
      country: "India",
    },
    {
      id: 23,
      title: "Shree Cement Solar Project",
      location: "Chhattisgarh",
      capacity: "17 MWp",
      type: "Ground-Mounted System",
      image: shreeCement,
      gallery: [shreeCement],
      detailedDescription:
        "Shree Cement, being one among the main players in the Indian Cement industry decided to reduce their carbon footprint by embracing clean energy for their operations. U-Solar designed and executed a Solar Project of 17 MWp using latest cutting-edge technology, which ensures maximum production and ROI on their investments.",
      year: "2024",
      client: "Shree Cement",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "industrial",
      country: "India",
    },
    {
      id: 24,
      title: "Madura Coats Solar Project",
      location: "Tamil Nadu",
      capacity: "3.5 MWp",
      type: "Rooftop Installation",
      image: maduraCoats,
      gallery: [maduraCoats],
      detailedDescription:
        "Madura Coats, one of the large-scale textile manufactures in South India partnered with U-Solar to reduce their energy bills by adopting solar energy. A total of 3.5 MWp Rooftop Solar capacity was commissioned in two phases, which brought down the energy bills significantly which reflected as an excellent Return of Investment.",
      year: "2024",
      client: "Madura Coats",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Operational",
      category: "industrial",
      country: "India",
    },
  ],
  utility: [
    {
      id: 7,
      title: "Jhapa Solar PV Project",
      location: "Shivasatakshi, Jhapa",
      capacity: "12 MWp",
      type: "Utility-Scale Solar Farm",
      image: jhapa1,
      gallery: [jhapa1, jhapa2, jhapa3, jhapa4, jhapa5, jhapa6],
      detailedDescription:
        "Jhapa Solar PV Project is located in Shivasatakshi Municipality of Jhapa District, Nepal. The plant is owned by Jhapa Energy Ltd. The capacity of the project is 12 MWp, making it one of the largest grid-connected solar projects completed in Nepal in 2023. The plant came into operation in December 2023. This plant occupies 15.57 hectares of land. There are 22,232 solar modules, each with a capacity of 540 Wp, and 2 units of 5 MVA inverters. The generation voltage of the plant is 690V and is stepped up to 33,000V to match the grid voltage of the utility system. The generated power is connected to the 33 kV Panchgachhi distribution centre of Nepal Electricity Authority, at a distance of 0.75 km. Janda Devi Nepal Energy has successfully completed the erection, installation, testing, and commissioning of the Jhapa Energy Solar Project, its substation, and transmission line.",
      year: "2023",
      client: "Nepal Electricity Authority",
      panels: "22,000 panels",
      inverter: "SMA Medium Voltage",
      savings: "Grid Supply",
      status: "Completed (Dec 2023)",
      category: "utility",
      country: "Nepal",
    },
    {
      id: 29,
      title: "Coal India Limited Solar Project",
      location: "West Bengal",
      capacity: "42 MWp",
      type: "Utility-Scale Solar Farm",
      image: coalIndiaImg,
      gallery: [coalIndiaImg],
      detailedDescription:
        "Coal India Limited is a PSU under Government of India and is one of the major producers of coal in India. As part of their sustainability and net-zero pathway, Coal India is adopting renewable energy to offset their carbon footprint. U-Solar designed and implemented a 42 MWp utility-scale solar project to support their renewable energy goals.",
      year: "2024",
      client: "Coal India Limited",
      panels: "—",
      inverter: "—",
      savings: "Grid Supply",
      status: "Operational",
      category: "utility",
      country: "India",
    },
    {
      id: 8,
      title: "Butwal Solar PV Project",
      location: "Tillottama, Rupandehi",
      capacity: "8.5 MW",
      type: "Utility-Scale Solar Farm",
      image: butwal1,
      gallery: [butwal1, butwal3, butwal4, butwal5],
      detailedDescription:
        "Butwal Solar PV Project is located in Tillottama Municipality of Rupandehi District, Nepal. The plant is owned by Ridi Hydropower Development Company Ltd. The capacity of the project is 8.5 MW, and it was the largest grid-connected solar project completed in Nepal in 2020. The plant came into operation in October 2020. This plant occupies 17.2 hectares of land. There are 31,280 solar modules, each with a capacity of 330 Wp, and 10 units of 850 kVA inverters. The generation voltage of the plant is 690V and is stepped up to 33,000V to match the grid voltage of the utility system. The generated power is connected to the 33 kV Amuwa Substation of Nepal Electricity Authority, at a distance of 7.4 km. Janda Devi Nepal Energy has successfully completed the erection, installation, and testing of the Butwal Solar Project, its substation, and transmission line.",
      year: "2020",
      client: "Lumbini Development Trust",
      panels: "18,500 panels",
      inverter: "Huawei Smart PV",
      savings: "Grid Supply",
      status: "Completed",
      category: "utility",
      country: "Nepal",
    },
    {
      id: 13,
      title: "Beldiya Solar Project",
      location: "Nawalpur",
      capacity: "12 MWp",
      type: "Utility-Scale Solar Farm",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "Beldiya Solar Project is a 12 MWp utility-scale, grid-connected solar farm under development in Nawalpur, Nepal.",
      year: "Ongoing",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "Grid Supply",
      status: "Under Construction",
      category: "utility",
      country: "Nepal",
    },
    {
      id: 14,
      title: "Janaki Solar Project",
      location: "Banke",
      capacity: "6 MWp",
      type: "Utility-Scale Solar Farm",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "Janaki Solar Project is a 6 MWp utility-scale, grid-connected solar farm under development in Banke, Nepal.",
      year: "Ongoing",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "Grid Supply",
      status: "Under Construction",
      category: "utility",
      country: "Nepal",
    },
    {
      id: 15,
      title: "Jay Ambe Captive Solar PV Project",
      location: "Banke",
      capacity: "12 MWp",
      type: "Utility-Scale Solar Farm",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "Jay Ambe Captive Solar PV Project is a 12 MWp captive solar power plant under development in Banke, Nepal, built to supply dedicated power to its owner's operations.",
      year: "Ongoing",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "Captive Supply",
      status: "Under Construction",
      category: "utility",
      country: "Nepal",
    },
  ],
  transmission: [
    {
      id: 16,
      title: "33kV S/C T-Line – Butwal Solar PV Plant",
      location: "Tillottama, Rupandehi",
      capacity: "33 kV",
      type: "Transmission Line",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "A 33 kV single-circuit transmission line connecting the Butwal Solar PV Plant at Tillottama, Rupandehi, to the grid.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Completed",
      category: "transmission",
      country: "Nepal",
    },
    {
      id: 17,
      title: "33kV Bay – Amuwa Substation",
      location: "Rupandehi",
      capacity: "33 kV Bay",
      type: "Substation Bay",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "A 33 kV bay extension at Amuwa Substation, Rupandehi, built to accommodate the interconnection of solar generation to the grid.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Completed",
      category: "transmission",
      country: "Nepal",
    },
    {
      id: 18,
      title: "33kV S/C T-Line – Shivasatakshi, Jhapa",
      location: "Jhapa (1 km)",
      capacity: "33 kV",
      type: "Transmission Line",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "A 1 km, 33 kV single-circuit transmission line connecting the Jhapa Solar PV Project at Shivasatakshi, Jhapa, to the grid.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Completed",
      category: "transmission",
      country: "Nepal",
    },
    {
      id: 19,
      title: "33kV Bay – Buluchwok Substation",
      location: "Jhapa",
      capacity: "33 kV Bay",
      type: "Substation Bay",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "A 33 kV bay extension at Buluchwok Substation, Jhapa, built to accommodate the interconnection of solar generation to the grid.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Completed",
      category: "transmission",
      country: "Nepal",
    },
    {
      id: 20,
      title: "33kV S/C Kohalpur–Nepalgunj T-Line",
      location: "Banke (11.6 km)",
      capacity: "33 kV",
      type: "Transmission Line",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "An 11.6 km, 33 kV single-circuit transmission line between Kohalpur and Nepalgunj, Banke, currently in the design and planning stage.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Design / Planning",
      category: "transmission",
      country: "Nepal",
    },
    {
      id: 21,
      title: "33kV S/C Beldiya–Mukundapur T-Line",
      location: "Nawalpur (5.6 km)",
      capacity: "33 kV",
      type: "Transmission Line",
      image: placeholderImage,
      gallery: [placeholderImage],
      detailedDescription:
        "A 5.6 km, 33 kV single-circuit transmission line between Beldiya and Mukundapur, Nawalpur, currently in the design and planning stage.",
      year: "—",
      client: "—",
      panels: "—",
      inverter: "—",
      savings: "—",
      status: "Design / Planning",
      category: "transmission",
      country: "Nepal",
    },
  ],
};
