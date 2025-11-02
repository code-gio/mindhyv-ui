#!/bin/bash

# QA Check Script for Preline Template Downloads
# Verifies all components were imported successfully

cd "$(dirname "$0")"

echo "=========================================="
echo "   PRELINE TEMPLATES QA CHECK"
echo "=========================================="
echo ""

# Expected template folders
EXPECTED_FOLDERS=(
    "hero-sections"
    "hero-forms"
    "icon-sections"
    "pricing-sections"
    "faq-sections"
    "blog-sections"
    "blog-articles"
    "team-sections"
    "testimonials"
    "masonry-sections"
    "features-general"
    "features-navs"
    "features-stats"
    "announcement-banners"
    "card-sections"
    "clients-sections"
    "galleries"
    "description-lists"
    "user-profiles"
    "timeline"
    "dropdowns"
    "selects"
    "button-groups"
    "pricing-pages"
    "product-listings"
    "modals"
    "cookie-banners"
    "navbars-headers"
    "mega-menu"
    "layouts-basic"
    "layouts-miscellaneous"
    "forms-authentication"
    "forms-feedback"
    "forms-subscribe"
    "forms-textarea-input"
    "contacts"
    "footers"
    "application"
    "app-navbars"
    "invoice"
    "tables"
    "stats"
    "form-layouts"
    "ai-prompt"
    "charts"
    "admin"
)

TOTAL_EXPECTED=${#EXPECTED_FOLDERS[@]}
FOLDERS_FOUND=0
FOLDERS_MISSING=0
FILES_OK=0
FILES_EMPTY=0
FILES_TOO_SMALL=0
FILES_ERROR=0

echo "📋 Checking for expected template folders..."
echo "Expected: $TOTAL_EXPECTED folders"
echo ""

# Arrays to track issues
MISSING_FOLDERS=()
EMPTY_FILES=()
SMALL_FILES=()
ERROR_FILES=()

# Check each expected folder
for folder in "${EXPECTED_FOLDERS[@]}"; do
    if [ -d "$folder" ]; then
        ((FOLDERS_FOUND++))
        
        # Check if index.html exists
        if [ -f "$folder/index.html" ]; then
            FILE_SIZE=$(stat -f%z "$folder/index.html" 2>/dev/null || stat -c%s "$folder/index.html" 2>/dev/null)
            
            # Check if file is empty
            if [ "$FILE_SIZE" -eq 0 ]; then
                ((FILES_EMPTY++))
                EMPTY_FILES+=("$folder")
                echo "❌ $folder - EMPTY FILE (0 bytes)"
            # Check if file is suspiciously small (likely an error page)
            elif [ "$FILE_SIZE" -lt 1000 ]; then
                ((FILES_TOO_SMALL++))
                SMALL_FILES+=("$folder")
                echo "⚠️  $folder - TOO SMALL (${FILE_SIZE} bytes, likely error page)"
            # Check for error indicators in content
            elif grep -q "404\|Not Found\|Error" "$folder/index.html" | head -1; then
                # Check if it's a real error or just has the word in content
                if grep -q "<title>.*404\|<title>.*Error\|<title>.*Not Found" "$folder/index.html"; then
                    ((FILES_ERROR++))
                    ERROR_FILES+=("$folder")
                    echo "❌ $folder - ERROR PAGE DETECTED"
                else
                    ((FILES_OK++))
                    echo "✅ $folder - OK (${FILE_SIZE} bytes)"
                fi
            else
                ((FILES_OK++))
                echo "✅ $folder - OK (${FILE_SIZE} bytes)"
            fi
        else
            echo "❌ $folder - MISSING index.html"
            ((FILES_EMPTY++))
            EMPTY_FILES+=("$folder")
        fi
    else
        ((FOLDERS_MISSING++))
        MISSING_FOLDERS+=("$folder")
        echo "❌ $folder - FOLDER NOT FOUND"
    fi
done

echo ""
echo "=========================================="
echo "   SUMMARY"
echo "=========================================="
echo ""
echo "📁 Folders:"
echo "   Expected: $TOTAL_EXPECTED"
echo "   Found:    $FOLDERS_FOUND"
echo "   Missing:  $FOLDERS_MISSING"
echo ""
echo "📄 Files:"
echo "   ✅ OK:         $FILES_OK"
echo "   ❌ Empty:      $FILES_EMPTY"
echo "   ⚠️  Too Small:  $FILES_TOO_SMALL"
echo "   ❌ Error Page: $FILES_ERROR"
echo ""

# Calculate total size
TOTAL_SIZE=$(du -sh . | cut -f1)
echo "💾 Total Size: $TOTAL_SIZE"
echo ""

# Show issues if any
if [ ${#MISSING_FOLDERS[@]} -gt 0 ]; then
    echo "❌ Missing Folders:"
    printf '   - %s\n' "${MISSING_FOLDERS[@]}"
    echo ""
fi

if [ ${#EMPTY_FILES[@]} -gt 0 ]; then
    echo "❌ Empty or Missing Files:"
    printf '   - %s\n' "${EMPTY_FILES[@]}"
    echo ""
fi

if [ ${#SMALL_FILES[@]} -gt 0 ]; then
    echo "⚠️  Suspiciously Small Files:"
    printf '   - %s\n' "${SMALL_FILES[@]}"
    echo ""
fi

if [ ${#ERROR_FILES[@]} -gt 0 ]; then
    echo "❌ Error Pages:"
    printf '   - %s\n' "${ERROR_FILES[@]}"
    echo ""
fi

# Final verdict
echo "=========================================="
if [ $FILES_OK -eq $TOTAL_EXPECTED ]; then
    echo "✅ QA CHECK PASSED!"
    echo "   All $TOTAL_EXPECTED templates downloaded successfully!"
    exit 0
else
    ISSUES=$((FILES_EMPTY + FILES_TOO_SMALL + FILES_ERROR + FOLDERS_MISSING))
    echo "⚠️  QA CHECK FAILED!"
    echo "   Found $ISSUES issue(s) that need attention."
    exit 1
fi
echo "=========================================="

