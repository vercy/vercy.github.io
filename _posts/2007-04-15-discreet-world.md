---
layout: post
title: Discreet World
date: 2007-04-15
---

###### 2007-04-15, [download]({{ site.url }}/assets/DiscreetWorld-1.1.jar)

This small-scale simulation program was inspired by the first few chapters of [Artificial Intelligence: A Modern
Approach](http://aima.cs.berkeley.edu/). More specifically the cleaner agent of the vacuum world. My university studies
did not include to much about agents that act on thier own. So I got curious enough to implement a synthetic world and
develop an agent that tries to make it dust-free. I developed a map visualizer sub-system so you can enjoy the result
in real time :) If you are interested in the source code you can find that in the downloadable jar file. The .jar file
can also be run as a standalone application.

*Instructions*
1. First you have to select a map. The agent selector boxes appear. The map defines how many agents can you place on them, so it may vary
2. Select a number of agents
3. Hit the start button
4. You can pause/resume the simulation any time. You can also add or remove agents after stopping the simulation.

**Agents types**
* *Vercy's cleaner agent:* This agent systematically traverses the map looking for dust. After the whole maps has been revised it returns to its start position
* *Dummy agent:* chooses a random action regardless of the sensed data. It was a great help for debugging, and it looks kind of funny

