---
layout: page
title: All Media Hits

---
<ul>
    {% for item in site.data.media %}
    <li class="mediaHit" data-date="{{ item.date }}"><b>{{ item.date }}:</b> {{ item.description }} {% if item.link %}<a href="{{ item.link}}">Read more</a>.{% endif%}</li>
    {% endfor %}
</ul>