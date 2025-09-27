import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selected, setSelected] = useState("❤️In Progress");

  const projects = {
    "❤️In Progress": [
      {
        title: "Single Player Game Using Fuzzy Logic",
        description:
          "This project is a single-player game where the player interacts with a bot whose decision-making system is implemented in two versions: Hard-coded Rules and Fuzzy Logic. The goal is to compare the behavior and responsiveness of the bot under game situations. It is expected that the Fuzzy Logic-based bot will respond more naturally and effectively, creating a more immersive and enjoyable experience for the player.",
        responsibilities: [
          "Design and built the game map, including setting up colliders to ensure accurate interactions and environmental boundaries.",
          "Test player movement and interactions within the map to ensure stable gameplay.",
          "Design and implement the bot decision-making system using Fuzzy Logic, allowing direct comparison with a Hard-coded Rules approach.",
        ],
        image: "src\\images\\game.png",
        github: "https://github.com/r1chwo0n/hideAwayHuntsGame.git",
      },
      {
        title:
          "Development of a Python Library for A Novel String Grammar Fuzzy Clustering",
        description:
          "This research focuses on developing a string grammar-based clustering algorithm using Fuzzy Logic and Levenshtein Distance to enhance the efficiency of finding cluster prototypes (Median Strings) and improve the accuracy of clustering structural data compared to Hard C-Means. My primary role is to validate, refine, and develop sgFCMed and sgUPFCMed algorithms into a usable Python library and prepare it for release on PyPI, making it easily accessible to other developers and researchers.",
        responsibilities: [
          "Review and validate the existing program, including understanding its logic and verifying calculation accuracy.",
          "Debug and resolve issues that caused the program to malfunction.",
          "Use the Copenhagen Chromosome Dataset to test and evaluate the model’s performance.",
          "Conduct Unit Testing, Functional Testing, and 10-Fold Cross Validation to ensure results closely align with the original research",
          "Compare and verified results between MATLAB Implementation and Python Implementation.",
          "Package the Python library and prepared it for public release on PyPI to allow wider adoption and ease of use.",
        ],
        image: "src\\images\\sgfc.png",
        research: "https://ieeexplore.ieee.org/document/7338109",
      },
    ],
    "💚Completed Projects": [
      {
        title: "Catprxprx",
        description:
          "A Mahjong-inspired puzzle game developed entirely in C++, drawing inspiration from the mobile game Doggo Go. Players strategically collect and match three identical cards to clear them from the tray. The game ends if the tray becomes full, and all cards must be cleared to win.",
        responsibilities: [
          "Created in-game visual elements including card designs, backgrounds, and the interactive “How to Play” screen.",
          "Developed and implemented a card-matching function to accurately detect and handle three-of-a-kind combinations within the tray.",
        ],
        github: "https://github.com/TonNattapon/risky.git",
        image: "src\\images\\draft_catprxprx.png",
      },
      {
        title: "Memable Project",
        description:
          "A relaxation-focused game designed to help players relieve stress through simple, accessible gameplay. The goal was to provide a sense of small yet meaningful achievement, encouraging the mindset of “it’s just a small thing.” The gameplay centers on memory and pattern recognition: players observe a sequence of illuminated lights and must correctly replicate the pattern by selecting the corresponding positions.",
        responsibilities: [
          "Designed and assembled the electronic circuit supporting the gameplay mechanics.",
        ],
        circuit:
          "https://www.tinkercad.com/things/3SK2ME9Hlxw-memable-with-latch?sharecode=RKT3f6ygdZ7GyN_f7r80oF3eEhjekFSBWqzdHSGXjC0",
        youtube: "https://m.youtube.com/watch?v=m9wKwuD1l-Q",
        image: "src\\images\\d_memable.jpg",
      },
    ],
    "💛Learning Projects": [
      {
        title: "UPBEAT",
        description:
          "A turn-based strategy game for two or more players, where the objective is to conquer all territories on the map. Players strategically invest in areas to expand their control, and the last remaining player wins. This was the final project for the Object-Oriented Programming course, developed collaboratively with two teammates. The project combined all core OOP principles — from designing classes to implementing various methods — and was fully developed in Java. As relatively new programmers at the time, we chose a hands-on, collaborative approach: brainstorming together, coding in turns each day, and jointly refining the implementation.",
        github: "https://github.com/poonbcw/UPBEAT-group20.git",
        image: "src\\images\\UPBEAT.png",
      },

    ],
  };

  return (
    <Box bg="#EEEAFF" minH="100vh" py={6}>
      <Box maxW="1200px" mx="auto" px={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white">
            {selected}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setSelected("💚Completed Projects")}>
              Completed Projects
            </MenuItem>
            <MenuItem onClick={() => setSelected("❤️In Progress")}>
              In Progress
            </MenuItem>
            <MenuItem onClick={() => setSelected("💛Learning Projects")}>
              Learning Projects
            </MenuItem>
          </MenuList>
        </Menu>

        <Box mt={5}>
          {projects[selected].map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              github={proj.github}
              research={proj.research}
              responsibilities={proj.responsibilities}
              image={proj.image}
              youtube={proj.youtube}
              circuit={proj.circuit}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
