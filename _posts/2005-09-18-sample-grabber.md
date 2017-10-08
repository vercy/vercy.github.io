---
layout: post
title: Sample Grabber
date: 2005-09-18
---

###### 2005-09-18, [GitHub](https://github.com/vercy/videosamplegrabber)

This library was developed as the part of an emotion recognizer project at the university of Debrecen.
To handle a capture device I got myself familiar with the applicable parts of
the Windows SDK / DirectShow. Since there was no support to invoke
directshow functions from managed code (C#) I also needed a marshall library.
I found an almost suitable library at [codeproject](http://www.codeproject.com),
however the complexity of the problem required me to revise some of the
critical parts of the library. It took a while to circumvent a marshalling
problem that was stated to be impossible by many on MSDN...

Two plugins come with the package. The file based (prFile.dll) plugin and
the general capture device (prGeneralDev.dll) plugin. The file provider can
make use of any file that is renderable with the default graphbuilder. The
general device provider can cope with any kind of camera or tuner. Unfortunately
it cannot deal with devices that require special codecs like some HD cameras do.

Features
* All sample providers are plugins
* Buffered/direct mode. If your device is slow, our your application needs instant reply you can turn on the buffered mode. It keeps a copy of the latest frame accessible to caller processes at any time.
* Runtime statistics
* Asynchronuos preview of the input stream
* Single frame mode/Frame server mode operation. in frame server mode the sampler keeps sending you the images right after your process function has returned.
* Interactive and scripted startup

![video sample grabber]({{ site.url }}/assets/images/grabber.jpg)
