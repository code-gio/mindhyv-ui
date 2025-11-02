#!/bin/bash

# Script to extract all component URLs from the downloaded HTML files
# Looks for the card sections with href links

cd "$(dirname "$0")"

echo "=========================================="
echo "   EXTRACTING ACTUAL URLS FROM HTML"
echo "=========================================="
echo ""

# Check a few successful downloads to find all the URLs
echo "Extracting URLs from hero-sections/index.html..."

# Extract all href links that point to examples
grep -o 'href="\./examples/[^"]*\.html"' hero-sections/index.html 2>/dev/null | \
    sed 's/href="\.\/examples\///' | \
    sed 's/"//' | \
    sort -u > all-urls.txt

if [ -f all-urls.txt ]; then
    echo "Found $(wc -l < all-urls.txt | xargs) unique URLs"
    echo ""
    echo "All available URLs:"
    cat all-urls.txt
    echo ""
    echo "Saved to all-urls.txt"
else
    echo "Failed to extract URLs"
fi

echo ""
echo "=========================================="

