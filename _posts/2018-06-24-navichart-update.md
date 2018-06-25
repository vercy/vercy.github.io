---
layout: post
title: Navigator Charts
date: 2018-06-24
---

###### 2018-06-24, [GitHub](https://github.com/vercy/navichart)

This week I experimented with approaches to draw images on high dpi displays.
I put this first because I was not sure what consequences might entail.
Apparently drawing via the floating point overrides of Graphics2D does the trick.

Based on this, the basics of the ui component had been laid down.
One side-effect of the week is some rudimentary plumbing
to be able to see the output which I included below.

The next step is adding more details to the image... 


![Navichart goal]({{ site.url }}/assets/images/navichart-20180624.jpg)

### 2018-06-16 Update

Navigator's first piece is a chart library called navichart.
The project stub is already on GitHub (link in the title).
I will try to post progress on a weekly basis to be able to look back at the course.

One thing I already noticed is that my early chart renderer is blurry
on high dpi displays. This is clearly not acceptable as most displays are
high resolution these days. After some digging it turns out that Java 
should be able to handle this as long as drawing is done device independent coordinates.
No problem... 

**New goal:** look crisp on high resolution displays



### 2018-06-11 Kick off

* Navigator is a project to guide through rough waters
* Navigator is experimenting and analysis
* Navigator enters development...

![Navichart goal]({{ site.url }}/assets/images/navichart-goal.jpg)