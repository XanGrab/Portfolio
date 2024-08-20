---
title: "Case Study: Redesigning Randomness"
date: 2024-08-03
searchHidden: true
draft: true
weight: 2
cover:
    image: img/cover.png
    alt: "(Cover Image) Case Study: Redesigning Randomness in MOTHER²"
    hidden: true
summary: "Summary of interface redesigns created for MOTHER² for the spring term of my user experience capstone. ✏️🎮️"
description: "Following the research conducted in the fall, the spring term was spent redesigning the broken tool repair sequence for MOTHER². This case study explores the user-centered design process used to develop those interfaces. ✏️🎮️"
ShowToc: true
tags: ["UX", "Mad--UX", "Research", "Development", "MOTHER²"]
---

{{< video src="./video/final-prototype.webm" align="center" loop="true" width="100%" autoplay="true" controls="false" >}}

_This post is a continuation the research conducted last fall, which you can ready about in the previous post: [Beginning User Research for a Fan Game](../madux-fall/)._

## Project Recap

The primary goal of my ongoing player research should be familiar to any other game development team: to make our game as fun, accessible, and easy to play as possible.

The design team for MOTHER² currently works to identify shortcomings of the original EarthBound for improvement and validate the usability of the game’s new features. Integrating our research with these goals, our team designed, developed, and evaluated prototypes over the spring term to bring new features of MOTHER² to fruition. Guided by our previous research, the design team and I elected to focus our effort on redesigning the broken-tool repair system from the original _EarthBound_.

{{< figure src="./img/broken-item.png" align="center" alt="Image of the ***Broken bazooka*** item from _EarthBound_" caption="Image of the ***Broken bazooka*** item from _EarthBound_" >}}

## Who Are Our Players?

In the preceding fall, the MOTHER² team developed a deeper understanding of our perspective players by conducting both a demographic and interests survey of the current game’s followers, as well as interview sessions with current gamers in the RPG community concerning their attitudes towards different mechanisms and trends in the genre. Developing these sorts of player profiles formed the foundation of our background research intending to tailor the experience of our game to different player types. Games like classic Super Mario Bros. masterfully adjust the player experience to their specific players without the need for distinct difficulty levels, catering to both casual and hardcore gamers simultaneously. Understanding these profiles helps designers craft experiences that align user and designer goals, subtly and effectively guiding players on a journey carefully constructed by an insightful dungeon master (or perhaps Dungeon man).

{{< figure src="./img/Dungeon-Man.gif" align="center" alt="Dungeon Man as he appears in _EarthBound_" caption="Dungeon Man as he appears in _EarthBound_" >}}

Here, it is important to note that the entire development team, from developers to artists, consists of players of either _EarthBound_. From their own experiences playing the game, many members have some assumptions regarding what aspects of the game should be iterated on and which should be preserved. It is a well-known tenet of the UXR world that: developers are **_NOT_** users. In the specific case of a fan game, however, the users have actually become developers. With all that said, there is a particular bias that is brought into play once these players transition into the role of designers. These game developers often forget what it was like to play the game for the first time, and will have differing interpretations of what could make the game “better”. My research in user experience helps to validate the assumptions that designers make about the game, and potentially expose overlooked areas for improvement.

## Identifying Issues

The foundation of our work was to identify how distinct interfaces of the original game both succeed and fail in their intended function. We then attempted to reimagine them in a way that amplified their successful features and improved their intended utility. As a part of our background research, we began by identifying interfaces that were commonly critiqued by players as being either outdated or obtuse in _EarthBound_. Making use of my UX toolkit allowed me to identify heuristics for visual and interaction design in discussions with my fellow designers.

Following these discussions, our team moved to a round of ideation in which I generated a range of potential feature requests recorded and grouped on post-its for analysis. This board was brought before the design team where we analyzed and ranked the ideas in each category based on perceived interest and cost. This process helped us to isolate the broken tool repair system as the area with the largest room for improvement while remaining feasible for the time frame of the course.

{{< figure src="./img/ideation-board.png" align="center" alt="Figure of the ideation board generated during the brainstorming process" caption="Figure of the ideation board generated during the brainstorming process" >}}

[Broken items](https://wikibound.info/wiki/Broken_items) are a special classification of in-game items in _EarthBound_. To repair these items during your adventure, a specific character’s IQ stat must have reached an adequate level specified by the original designers, which is not communicated in any way whatsoever to the player. The steps required to repair these items are rather opaque (vaguely hinted at by a single, easily missed line of dialogue) and involve a certain level of randomness that leaves little room for player engagement. When the player stays overnight at a hotel (initiating a repair sequence) they are not guaranteed to have a successful repair, but rather take a pseudo-random chance of the message displaying. Coupled with a limited inventory space, this can lead inexperienced players to completely ignore these items altogether. As these are crucial to future sections of the game, we asked ourselves how we might clarify this feature to new players.

## Sketching & Ideation

In the early phase of our redesign, I created a number of quick sketches allowing for rapid exploration and iteration of design ideas. Redesigning this system presented the challenge of preserving the original game's identity without alienating veteran players.

One early concept for the repair system involved presenting the player with a full-on minigame similar to _The Lost Mind of Dr Brain_, which they would then complete during rest sequences to repair the minigame.

{{< figure src="./img/early-minigame-inspo.jpg" align="center" alt="Screenshot from the game _The Lost Mind of Dr Brain_" caption="Screenshot from the game _The Lost Mind of Dr Brain_" >}}

The disadvantages of this approach could impact the game's pacing and make the repair process more difficult for certain player groups. For these reasons, I decided to try a metaphorical redesign, returning to the major source of inspiration for many digital RPGs, tabletop role-playing games (hereafter affectionately known as TTRPGs). In TTRPGs, randomness is generally handled by rolling dice to determine outcomes and random events in various situations.

For MOTHER² we imagined exposing the pre-existing element of randomness during the rest sequence when items are repaired. This effectively allows players to "roll the dice" themselves helping better engage players and clarify the system functionality.

{{< figure src="./img/broken-tool-sketch.png" align="center" alt="Early sketches that would ultimatley lead to the creation of the new broken tool repair system" caption="Early sketches that inspired the design of the new broken tool repair system" >}}

## Prototyping

Further iterations of this idea led us to develop higher-fidelity prototypes which were consistently peer-reviewed by a cohort of my fellow UX practitioners, and designers of MOTHER². Their feedback helped identify several changes that helped prepare the system for testing with players.

{{< figure src="./img/lofi-mockup-01.png" align="center" alt="Early mockups created for the new repair system" caption="Early mockups that were created for the new repair system" >}}

{{< figure src="./img/prototype-components.png" align="center" alt="Layout of MOTHER² components created for use the HiFi prototpyes of the new repair system" caption="Layout of MOTHER² components created for use the HiFi prototpyes of the new repair system" >}}

{{< figure src="./img/hifi-prototypes.png" align="center" alt="Figure depicting the full layout of the hifidelity prototype created the new repair system" caption="Figure depicting the full layout of the hifidelity prototype created the new repair system" >}}

## The End?

As we neared the final stages of design, preparing to test these interfaces with players, we faced an unexpected setback. Due to a lack of communication on behalf of the capstone program, the critical evaluation phase of the project was suddenly halted to make way for an entirely new usability study that subsequent summer. This delay was primarily due to the disorganization within the course structure, which led to many of the projects my cohorts and I worked on that spring half finished. As a result, our carefully planned timelines were disrupted, affecting our ability to gather essential user feedback and make timely iterations. Despite these challenges, we remained adaptable, rescheduling these playtests internally within the MOTHER² team's development timeline. This experience underscored the importance of effective project management and clear communication in ensuring the smooth progression of UX design processes, serving as a sort of right-of-passage for us burgeoning UX professionals.

{{< figure src="./img/Earthbound-gameover.png" align="center" alt="Screenshot of EarthBound's Game Over Screen" caption="Screenshot of EarthBound's Game Over Screen" >}}

_This is not the end of my research with the MOTHER² project. If you would like to learn more about how UX principles informed the design of specific features added to the remake check out the following case studys: [What Does Games User Research Look Like for a Fan Game?](../madux-fall/) [How EarthBound Teaches its Players to Play](../madux-summer/)._
