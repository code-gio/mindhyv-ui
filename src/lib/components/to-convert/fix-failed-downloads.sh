#!/bin/bash

# Fix failed downloads with correct URLs
cd "$(dirname "$0")"

echo "=========================================="
echo "   FIXING FAILED DOWNLOADS"
echo "=========================================="
echo ""

# Function to fetch template
fetch_template() {
    local folder_name="$1"
    local url="$2"
    
    echo "Downloading: $folder_name"
    echo "  URL: https://preline.co/examples/$url"
    
    # Fetch HTML and save
    HTTP_CODE=$(curl -s -o "$folder_name/index.html" -w "%{http_code}" "https://preline.co/examples/$url")
    
    if [ "$HTTP_CODE" = "200" ]; then
        FILE_SIZE=$(du -h "$folder_name/index.html" | cut -f1)
        echo "  ✅ Success ($FILE_SIZE)"
    else
        echo "  ❌ Failed (HTTP $HTTP_CODE)"
    fi
    echo ""
}

# Re-download with correct URLs
fetch_template "pricing-pages" "page-pricing.html"
fetch_template "product-listings" "ecommerce-product-listings-grid-layout.html"
fetch_template "modals" "overlays-modals.html"
fetch_template "navbars-headers" "navigations-navbars.html"
fetch_template "mega-menu" "navigations-mega-menu.html"
fetch_template "layouts-basic" "layouts-basic.html"
fetch_template "layouts-miscellaneous" "layouts-miscellaneous.html"
fetch_template "forms-authentication" "forms-authentication.html"
fetch_template "forms-feedback" "forms-feedback.html"
fetch_template "forms-subscribe" "forms-subscribe.html"
fetch_template "forms-textarea-input" "forms-textarea-input.html"
fetch_template "application" "layouts-application.html"
fetch_template "app-navbars" "layouts-application-navbars.html"
fetch_template "invoice" "application-invoice.html"
fetch_template "tables" "application-tables.html"
fetch_template "stats" "application-stats.html"
fetch_template "form-layouts" "application-form-layouts.html"
fetch_template "ai-prompt" "application-ai-prompt.html"
fetch_template "admin" "application-page-admin.html"

echo "=========================================="
echo "   Re-download Complete!"
echo "=========================================="

