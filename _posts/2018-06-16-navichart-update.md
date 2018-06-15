---
layout: post
title: Navigator Update
date: 2018-06-16
---

###### 2018-06-16, [GitHub](https://github.com/vercy/navichart)

Navigator's first piece is a chart library called navichart.
The project stub is already on GitHub (link in the title).
I will try to post progress on a weekly basis to be able to look back at the course.

One thing I already noticed is that my early chart renderer is blurry
on high dpi displays. This is clearly not acceptable as most displays are
high resolution these days. After some digging it turns out that Java 
should be able to handle this as long as drawing is done device independent coordinates.
No problem... 

**New goal:** look crisp on high resolution displays

