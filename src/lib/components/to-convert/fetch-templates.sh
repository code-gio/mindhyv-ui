#!/bin/bash

# Script to fetch all Preline template HTML files
# Creates folder structure and downloads HTML for each template type

BASE_DIR="src/lib/components/to-convert"
cd "$(dirname "$0")/../../.."

# Function to create folder and fetch HTML
fetch_template() {
    local folder_name="$1"
    local url="$2"
    
    echo "Fetching: $folder_name from $url"
    
    # Create folder if it doesn't exist
    mkdir -p "$BASE_DIR/$folder_name"
    
    # Fetch HTML and save to file
    curl -s "$url" -o "$BASE_DIR/$folder_name/index.html"
    
    if [ $? -eq 0 ]; then
        echo "✓ Successfully fetched $folder_name"
    else
        echo "✗ Failed to fetch $folder_name"
    fi
}

# Marketing - Page Sections
fetch_template "hero-sections" "https://preline.co/examples/hero-sections.html"
fetch_template "hero-forms" "https://preline.co/examples/hero-forms.html"
fetch_template "icon-sections" "https://preline.co/examples/icon-sections.html"
fetch_template "pricing-sections" "https://preline.co/examples/pricing-sections.html"
fetch_template "faq-sections" "https://preline.co/examples/faq-sections.html"
fetch_template "blog-sections" "https://preline.co/examples/blog-sections.html"
fetch_template "blog-articles" "https://preline.co/examples/blog-articles.html"
fetch_template "team-sections" "https://preline.co/examples/team-sections.html"
fetch_template "testimonials" "https://preline.co/examples/testimonials.html"
fetch_template "masonry-sections" "https://preline.co/examples/masonry-sections.html"
fetch_template "features-general" "https://preline.co/examples/features-general.html"
fetch_template "features-navs" "https://preline.co/examples/features-navs.html"
fetch_template "features-stats" "https://preline.co/examples/features-stats.html"
fetch_template "announcement-banners" "https://preline.co/examples/announcement-banners.html"
fetch_template "card-sections" "https://preline.co/examples/card-sections.html"
fetch_template "clients-sections" "https://preline.co/examples/clients-sections.html"
fetch_template "galleries" "https://preline.co/examples/galleries.html"
fetch_template "description-lists" "https://preline.co/examples/description-lists.html"
fetch_template "user-profiles" "https://preline.co/examples/user-profiles.html"
fetch_template "timeline" "https://preline.co/examples/timeline.html"

# Marketing - UI Controls
fetch_template "dropdowns" "https://preline.co/examples/dropdowns.html"
fetch_template "selects" "https://preline.co/examples/selects.html"
fetch_template "button-groups" "https://preline.co/examples/button-groups.html"

# Marketing - Pages
fetch_template "pricing-pages" "https://preline.co/examples/pricing.html"

# Marketing - E-Commerce
fetch_template "product-listings" "https://preline.co/examples/product-listings-grid-layout.html"

# Marketing - Overlays
fetch_template "modals" "https://preline.co/examples/modals.html"
fetch_template "cookie-banners" "https://preline.co/examples/cookie-banners.html"

# Marketing - Navigations
fetch_template "navbars-headers" "https://preline.co/examples/navbars-headers.html"
fetch_template "mega-menu" "https://preline.co/examples/mega-menu.html"

# Marketing - Layouts
fetch_template "layouts-basic" "https://preline.co/examples/basic.html"
fetch_template "layouts-miscellaneous" "https://preline.co/examples/miscellaneous.html"

# Marketing - Forms
fetch_template "forms-authentication" "https://preline.co/examples/authentication.html"
fetch_template "forms-feedback" "https://preline.co/examples/feedback.html"
fetch_template "forms-subscribe" "https://preline.co/examples/subscribe.html"
fetch_template "forms-textarea-input" "https://preline.co/examples/textarea-input.html"

# Marketing - Contacts & Footers
fetch_template "contacts" "https://preline.co/examples/contacts.html"
fetch_template "footers" "https://preline.co/examples/footers.html"

# Applications
fetch_template "application" "https://preline.co/examples/application.html"
fetch_template "app-navbars" "https://preline.co/examples/navbars.html"
fetch_template "invoice" "https://preline.co/examples/invoice.html"
fetch_template "tables" "https://preline.co/examples/tables.html"
fetch_template "stats" "https://preline.co/examples/stats.html"
fetch_template "form-layouts" "https://preline.co/examples/form-layouts.html"
fetch_template "ai-prompt" "https://preline.co/examples/ai-prompt.html"
fetch_template "charts" "https://preline.co/examples/charts.html"
fetch_template "admin" "https://preline.co/examples/admin.html"

echo ""
echo "====================================="
echo "Download complete!"
echo "Total template types fetched: 45"
echo "====================================="

