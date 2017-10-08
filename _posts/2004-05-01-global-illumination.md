---
layout: post
title: Global Illumination Raytracer
date: 2004-05-01
---

###### 2004-05-01

A few students of the global illumination course could demonstrate their skills
with renders instead of the exam. I also built an engine that was able to render
both global and local illumination. The engine accepted a scene and produced an
image. I also developed a script editor for more sophisticated scene editing.

The global illumination engine is based on the Monte-Carlo integral so it is
painfully slow. After some calculations and experiments I developed a stochastic
rendering technology, where the image is the result of a convergence procedure.
The method uses scan-lines, but in a fashion that gives you a global impression
very soon.

![Raytracer output]({{ site.url }}/assets/images/raytracer05.png)
