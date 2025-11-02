#!/bin/bash

# Script to fix failed downloads with correct URLs

BASE_DIR="src/lib/components/to-convert"
cd "$(dirname "$0")/../../.."

echo "=========================================="
echo "   FIXING FAILED TEMPLATE DOWNLOADS"
echo "=========================================="
echo ""

# Function to fetch and replace
fetch_template() {
    local folder_name="$1"
    local url="$2"
    
    echo "Re-fetching: $folder_name from $url"
    
    # Create folder if it doesn't exist
    mkdir -p "$BASE_DIR/$folder_name"
    
    # Fetch HTML and save to file
    curl -s "$url" -o "$BASE_DIR/$folder_name/index.html"
    
    if [ $? -eq 0 ]; then
        # Check if it's a 404 page
        if grep -q "<title>Not Found" "$BASE_DIR/$folder_name/index.html"; then
            echo "   ❌ Still getting 404 - URL might not exist"
        else
            FILE_SIZE=$(stat -f%z "$BASE_DIR/$folder_name/index.html" 2>/dev/null || stat -c%s "$BASE_DIR/$folder_name/index.html" 2>/dev/null)
            echo "   ✅ Success (${FILE_SIZE} bytes)"
        fi
    else
        echo "   ❌ Failed to fetch"
    fi
}

# Re-download with corrected URLs
fetch_template "pricing-pages" "https://preline.co/examples/page-pricing.html"
fetch_template "product-listings" "https://preline.co/examples/ecommerce-product-listings-grid-layout.html"
fetch_template "modals" "https://preline.co/examples/overlays-modals.html"
fetch_template "navbars-headers" "https://preline.co/examples/navigations-navbars.html"
fetch_template "mega-menu" "https://preline.co/examples/navigations-mega-menu.html"
fetch_template "layouts-basic" "https://preline.co/examples/layouts-basic.html"
fetch_template "layouts-miscellaneous" "https://preline.co/examples/layouts-miscellaneous.html"
fetch_template "forms-authentication" "https://preline.co/examples/forms-authentication.html"
fetch_template "forms-feedback" "https://preline.co/examples/forms-feedback.html"
fetch_template "forms-subscribe" "https://preline.co/examples/forms-subscribe.html"
fetch_template "forms-textarea-input" "https://preline.co/examples/forms-textarea-input.html"
fetch_template "application" "https://preline.co/examples/layouts-application.html"
fetch_template "app-navbars" "https://preline.co/examples/layouts-application-navbars.html"
fetch_template "invoice" "https://preline.co/examples/application-invoice.html"
fetch_template "tables" "https://preline.co/examples/application-tables.html"
fetch_template "stats" "https://preline.co/examples/application-stats.html"
fetch_template "form-layouts" "https://preline.co/examples/application-form-layouts.html"
fetch_template "ai-prompt" "https://preline.co/examples/application-ai-prompt.html"
fetch_template "admin" "https://preline.co/examples/application-page-admin.html"

echo ""
echo "=========================================="
echo "   Re-download complete!"
echo "=========================================="

