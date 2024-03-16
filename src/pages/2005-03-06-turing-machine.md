---
layout: post
title: Turing machine
date: 2005-03-06
---

###### 2005-03-06, [download]({{ site.url }}/assets/vtm.jar)

I held a demonstration class in algorithm theory at the university of Debrecen in 2004. The course was theoretical
but I built a decided to build an Java applet to help the students verify their ideas.

1. Define the number of the tapes
2. Specify an input string
3. Input the code to execute. Enter one instruction per line!
4. Press the [Run] button

Instruction syntax: `{state} {input}+ -> {state} {output}+ {movements}+`

Example using one tape: `init 1 -> init 1 R`

Example using two tapes: `q1 1 * -> q3 1 1 R R`
