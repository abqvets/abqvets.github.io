#!/usr/bin/env ruby

require 'fileutils'
require 'date'

# Prompt helper
def prompt(question)
  print "#{question}: "
  gets.chomp
end

# Get user inputs
title = prompt("What is the title of the post?")
author = prompt("Who is the author?")
categories = prompt("Enter categories (comma-separated):")
tags = prompt("Enter tags (comma-separated):")
layout = prompt("Enter layout (default: post)")
layout = 'post' if layout.strip.empty?

# Slugify title for filename
slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
date = Date.today.strftime('%Y-%m-%d')
filename = "/Users/miguel/Documents/code/AbqVets/abqvets-build/_drafts/#{date}-#{slug}.md"

# Ensure _posts directory exists
FileUtils.mkdir_p("_posts")

# Create front matter
front_matter = <<~HEREDOC
  ---
  layout: #{layout}
  title: "#{title}"
  date: #{date}
  author: "#{author}"
  categories: [#{categories.split(',').map(&:strip).join(', ')}]
  tags: [#{tags.split(',').map(&:strip).join(', ')}]
  ---
HEREDOC

# Write to file
File.open(filename, 'w') do |file|
  file.puts front_matter
  file.puts "\n<!-- Write your post content here -->"
end

puts "Post created: #{filename}"
