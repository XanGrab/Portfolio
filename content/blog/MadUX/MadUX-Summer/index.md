---
title: "Case Study: How EarthBound Teaches Players to Play"
date: 2024-08-18
searchHidden: true
draft: true
weight: 8
cover:
    image: img/cover.png
    alt: "(Cover Image) Case Study: Redesigning Randomness in MOTHER²"
    hidden: true
summary: "Summary of the usability study created to study the tutorial of _EathBound_ for the summer term of my user experience capstone. 🧑‍🔬🎮️"
description: "This case study examines the tutorial section of the SNES game EarthBound, highlighting key areas such as navigation and UI controls that should be refined in the fan remake MOTHER² to enhance accessibility for modern players while preserving the game's unique charm. 🧑‍🔬🎮️"
ShowToc: true
tags:
    ["UX", "Mad--UX", "Playtest", "Usability Testing", "Development", "MOTHER²"]
---

_What to learn more about the process of planning this usability test? Checkout out my [UX portfolio series!](../ux-p1/)_

## 📜 **Prologue**

_EarthBound_, originally released in 1995 for the Super Nintendo Entertainment System, is a cult-classic RPG known for its quirky humor and unique setting. Despite its initial lukewarm reception, the game has since garnered a devoted fanbase and is often cited as a masterpiece of its genre.

Given its iconic status, any attempts to remake or modernize _EarthBound_ must carefully preserve its original charm while addressing the usability issues that could alienate modern players. This case study focuses on the usability testing of the original _EarthBound_, conducted to identify usability challenges or pain points that modern players might face. Our aim was to extract insights that could inform the development of a fan-made remake [_MOTHER²_](../../../games/mothersquared/), ensuring it meets the expectations of both new players and long-time fans.

## 🎯 **Objectives**

This usability study aimed to address the following research questions:

1. **Intuitive Controls**: Are the instructions and goals of the game presented to the player clearly?
2. **Player Engagement**: What factors contribute to or detract from player engagement during the early stages of the game?
3. **User Navigation**: Do players understand how to reach the next key point in the game’s story without getting stuck or lost?

## 📊 **Methodology**

This study employed a combination of observational research, task analysis, and user feedback to gather comprehensive data on player interactions with EarthBound’s early game, particularly its tutorial.

### **Study Design**

-   **Tasks**: Participants were tasked with playing through the opening sequence of the game unguided, as they might organically. Players were provided with a cheat sheet of the game's original controls taken from the original player guidebook.

#### Key In-Game Tasks

1. Start a new game and create a save file.
2. Explore & exit the player’s home.
3. Navigate to the crash site (Leave the house, talk to Pokey, and return home).
4. Complete the first quest of the game (escort Picky home).
5. Complete all combat encounters of the tutorial segment.

{{< figure src="./img/levels-of-success.png" caption="Levels of success captured for task data post-study" alt="Chart depicting the levels of success captured for task data post-study">}}

-   **Observations**: During the session I observed participants’ gameplay, noting any difficulties or confusion they encountered. I also recorded timestamps as players completed key segments of the introduction for more granular task analysis.
-   **Post-Task Interviews**: After the gameplay session, participants were interviewed to gather qualitative feedback on their experience, focusing on their understanding of the game mechanics and their overall enjoyment.

### **Participants**

-   A diverse group of seven participants was recruited, including both fans following the MOTHER² project as well as players with little or no prior experience with the game. The participant pool varied in gaming experience and familiarity with RPGs, ensuring a wide range of perspectives.

Following the playtest sessions, all quantitative and qualitative data was parsed into a comprehensive report.

{{< figure src="./img/qual-data-comp.png" align="center" caption="_Snapshot of the qualitative parsing process post playtests conducted in Miro_" alt="_Snapshot of the qualitative parsing process post playtests conducted in Miro_">}}

## 🔎 **Findings**

The usability test of EarthBound revealed several key findings that highlight both the strengths of the original game and areas that could be improved in a potential remake.

-   **Lack of Guidance**: Many participants, showed signs of struggle understanding where to go and what to do after the initial interactions with NPCs like Pokey. The game’s open-ended nature, while appealing to some, left others feeling lost and unsure of how to progress.

{{< figure src="./img/average-tot-chart.png" caption="Figure representing the average time on task evaluated for the introduction of EarthBound with a 90% confidence interval." alt="Figure representing the average time on task evaluated for the introduction of EarthBound with a 90% confidence interval.">}}

-   **Scrolling Text Speed**: Nearly all participants selected the fast dialogue speed when creating their save file. During the game's overworld sequences, players showed little difficulty reading the dialogue at the "fast" speed, however, many participants voiced confusion over the turn order and enemy actions during combat encounters, which they largely attributed to the fast scroll speed.

> I don't even really understand what happened. Maybe cause I set the text to be fast? Maybe I should change that setting..."
>
> -- <cite>Study Participant 3</cite>

## 💡 **Design Insights**

Based on the findings from the usability testing of EarthBound, several design recommendations can be made to inform the development of the fan remake:

1. **Enhanced Navigation Assistance**: One approach taken by modern RPGs when addressing navigation issues, is to incorporate more explicit visual cues, such as subtle arrows or highlighted paths that guide players to their next objective.

2. **Text Options²**: Multiple players made note of difficulties concerning the speed of the dialogue window during combat encounters. Offering more fine-tuned control to adjust the text speed of combat and overworld text separately may improve player experience here.

## 🎒 **Take Aways**

The usability testing of _EarthBound_ provided valuable insights into the challenges and strengths of the original game, particularly in the context of modern gaming expectations. EarthBound’s unique sense of humor continues to resonate with fans today garnering laughs from nearly every playtester at various points in the game. That being said, certain aspects of the game, such as overworld navigation present usability challenges for newer players.

These insights will prove invaluable for the development of _MOTHER²_. By implementing the recommended design changes, the remake can retain the essence of _EarthBound_ while enhancing its accessibility and appeal to a broader audience. Future usability testing and log analytics will be essential in refining the remake’s design, ensuring it meets the high standards set by the original game and delivers an enjoyable experience for all players.

_To read the full case study retrospective continue reading [here](../ux-p6/)._ ⏩️
