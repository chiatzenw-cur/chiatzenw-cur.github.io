---
layout: post
title: Archive
permalink: /archive/
---

<div class="archive-container">

  <div class="archive-grid">
    {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
    
    {% for year_group in posts_by_year %}
      <div class="year-section">
        <h2 class="year-title neon-pink crt-text">{{ year_group.name }}</h2>
        
        <div class="posts-grid">
          {% for post in year_group.items %}
            <article class="archive-post">
              <div class="post-date">
                <span class="day">{{ post.date | date: "%d" }}</span>
                <span class="month">{{ post.date | date: "%b" }}</span>
              </div>
              
              <div class="post-info">
                <h3 class="post-title">
                  <a href="{{ post.url | relative_url }}" class="crt-text">{{ post.title | escape }}</a>
                </h3>
                
                {% if post.excerpt %}
                  <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                {% endif %}
                
                {% if post.categories.size > 0 %}
                  <div class="post-categories">
                    {% for category in post.categories %}
                      <span class="category-tag">{{ category }}</span>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
    <div class="empty-archive" style="text-align: center; margin: 3rem 0; color: #636d83;">
      <p>No posts available yet.</p>
      <p>Check back soon for new content!</p>
    </div>
  {% endif %}
</div>

