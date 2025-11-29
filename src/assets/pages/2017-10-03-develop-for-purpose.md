---
layout: post
title: Develop for Purpose
date: 2017-10-03
---

###### 2017-10-03, [Medium](https://medium.com/@vercy/develop-for-purpose-66f2c94d0717)

A cheat list for keeping software development teams focused and motivated on projects with a purpose but without audacity.
A lot of the success of a software solution might depend on factors such as marketing and brand value but the outcome is
also inherently linked to the developing team and the process used. Making sure that the program has a chance of success
keeping the team focused and motivated may become tricky on longer projects that lack audacities. This list is not meant
to conform to any specific methodology, they are ideas that I find helpful for walking the talk and creating value while
developing software.

![nLT screenshot]({{ site.url }}/assets/images/cup-of-coffee.jpg)

## Embrace the purpose
Have a vision. See the end product and shape it with good ideas down the road.
Good ideas can come from anywhere and less can be more in software development too.
Replacing and removing superfluous ideas is just as important as adding new ones.

## Avoid ‘potentially useful’ code
Let’s pretend for a minute that *program code* has mass and it is in a pool of water.
Sometimes there are storms and the water level changes every now and then.
The developing team tries to keep the mass from sinking or drifting out of the horizon.
The idea is to try to keep the code free of dead weight as much as possible so that it is easier to move it around.

## Keep inventing
There are an infinite number of solutions for every problem and when we write code we chose exactly one.
It is probably easier to find a needle in a haystack than getting the code perfect. Keep on shaping
the code by improving the understanding of the problem.

## Don’t be afraid of complexity
If we are lucky there is a stock solution for our problem and our code will *look* simple.
However, worthwhile problems tend *not* to have a stock solution and we have to implement at least parts of the idea ourselves.
The code might become big and look *not simple*. I find it helpful in these cases to pay extra attention
to keeping the implementation close to the idea so that changes to the idea may be followed with ease.

## Clean Code
Like it or not, a lot of the time is spent on rediscovering existing code. I find it useful to pretend that the
code is written for our future selves and we will have to read it again. When we re-read our code it is better to
find ourselves at a familiar place as opposed to a huge mess. These are the clean code ideas that I find most useful:
* Write code that can be understood by complete strangers
* Use few patterns consistently to make the code feel familiar
* Cover your code with tests to be able to recall the specs

## Appreciate your bottlenecks
Know the theoretical limits of memory and CPU complexity for your problem and use them as target for the implementation.
We have complete control over our code but sometimes know little about our libraries.
The source code is available for most contemporary libraries but it might take some reassurance for team members
to get into the habit of popping them open. Offending libraries might have to be removed or their compromises accepted.
In the lack of an acceptable stock solution there should be no shame in implementing our own.

## Keep development time under control
Development time is not just writing code. From zero to one, we spend time with testing,
ensuring there is an infrastructure and do multiple deployments to mention a few.
Try to keep the invested time to a minimum and communicate schedule expectations continuously.
When in doubt about adding a feature or taking a shortcut consult the product vision.

## Measure your application
Usage patterns change over time and when the new pattern is not working well with the existing stack
we usually receive a change request. Most of them come in a form of a complaint. Would not it be great if we could
add the missing pieces without having to annoy the users first? Add metrics for measuring business concepts.
An external tool can help to keep track of the basics but the really insightful metrics require coding and follow
the software development lifecycle. Getting the metrics right and analyzing their output may require a combination
of intuition followed by analysis ■