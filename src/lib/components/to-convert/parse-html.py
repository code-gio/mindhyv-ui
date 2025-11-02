#!/usr/bin/env python3
"""
Parse HTML files to extract component URLs and metadata
"""

import re
import os
from pathlib import Path

def extract_component_info(html_content):
    """Extract component cards from HTML"""
    # Pattern to match component cards
    pattern = r'<a[^>]*href="\./examples/([^"]+\.html)"[^>]*>.*?<h3[^>]*>([^<]+)(?:<span[^>]*>([^<]+)</span>)?</h3>.*?<p[^>]*>([^<]+)</p>'
    
    matches = re.findall(pattern, html_content, re.DOTALL)
    
    components = []
    for match in matches:
        url = match[0]
        title = match[1].strip()
        badge = match[2].strip() if match[2] else ""
        count = match[3].strip()
        
        components.append({
            'url': url,
            'title': title,
            'badge': badge,
            'count': count
        })
    
    return components

def main():
    # Find a successful HTML file to parse
    html_file = Path('hero-sections/index.html')
    
    if html_file.exists():
        print("Parsing hero-sections/index.html...")
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        components = extract_component_info(content)
        
        print(f"\nFound {len(components)} component references\n")
        print("URL Mapping:")
        print("=" * 80)
        
        for comp in components:
            print(f"{comp['title']:<40} {comp['url']:<50} {comp['count']}")
        
        # Extract just the URLs
        print("\n\nAll URLs:")
        print("=" * 80)
        urls = sorted(set([comp['url'] for comp in components]))
        for url in urls:
            print(url)
        
        # Save to file
        with open('all-component-urls.txt', 'w') as f:
            for url in urls:
                f.write(f"{url}\n")
        
        print(f"\n\nSaved {len(urls)} URLs to all-component-urls.txt")
    else:
        print("Error: hero-sections/index.html not found")

if __name__ == '__main__':
    main()

