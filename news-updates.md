---
layout: page
title: News
visible: false
---

<ul>
    {% for item in site.data.media_hits.media_hits %}
    <li class="mediaHit" data-date="{{ item.media_date }}"><b>{{ item.media_date }}:</b> {{ item.description }} {% if item.link %}<a href="{{ item.link}}">Read more</a>.{% endif%}</li>
    {% endfor %}
</ul>
