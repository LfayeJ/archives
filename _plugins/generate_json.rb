# _plugins/generate_json.rb
require 'json'

Jekyll::Hooks.register :site, :post_write do |site|
  all_posts = site.posts.docs.map do |post|
    {
      title: post.data['title'],
      url: post.url,
      content: post.content
    }
  end

  File.open('_site/assets/posts.json', 'w') do |file|
    file.write(JSON.pretty_generate(all_posts))
  end
end
