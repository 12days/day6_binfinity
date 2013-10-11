# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = "binfinity-rails"
  s.version     = "0.0.4"
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Joshua Wilborn", "David Kim"]
  s.email       = ["joshua.j.wilborn@gmail.com", "daviddarden11@gmail.com"]
  s.homepage    = "https://github.com/12days/day6_binfinity"
  s.summary     = "Bi-directional Infinite Scroll"
  s.description = "This gem provides a javascript plugin to allow uni or bidirectional infinite scrolling with options"

  s.required_rubygems_version = ">= 1.3.6"

  s.add_dependency "railties", "> 3.1.0"
  s.add_dependency "jquery-rails"
  s.add_development_dependency "bundler", "~> 1.0"

  s.files        = `git ls-files`.split("\n")
  s.require_path = 'lib'
end
