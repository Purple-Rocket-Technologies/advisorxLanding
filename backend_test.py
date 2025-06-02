import requests
import unittest
import sys
import re

class AdvisorXAPITests(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(AdvisorXAPITests, self).__init__(*args, **kwargs)
        self.base_url = "http://localhost:3000"
        
    def test_logo_api(self):
        """Test the new logo API endpoint"""
        print("\n🔍 Testing logo API endpoint...")
        
        try:
            response = requests.get(f"{self.base_url}/api/logo")
            
            # Check if the request was successful
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            print("✅ Status code: 200")
            
            # Check if the response is SVG
            content_type = response.headers.get('Content-Type', '')
            self.assertTrue('image/svg+xml' in content_type, f"Expected Content-Type to include 'image/svg+xml', got '{content_type}'")
            print("✅ Content-Type: image/svg+xml")
            
            # Check if the response contains SVG content
            svg_content = response.text
            self.assertTrue(svg_content.startswith('<svg'), "Response should be an SVG starting with <svg>")
            print("✅ Response contains valid SVG content")
            
            # Check if the SVG has the correct dimensions (40x40)
            width_match = re.search(r'width="(\d+)"', svg_content)
            height_match = re.search(r'height="(\d+)"', svg_content)
            
            self.assertIsNotNone(width_match, "SVG should have a width attribute")
            self.assertIsNotNone(height_match, "SVG should have a height attribute")
            
            width = width_match.group(1)
            height = height_match.group(1)
            
            self.assertEqual(width, "40", f"Expected width to be 40, got {width}")
            self.assertEqual(height, "40", f"Expected height to be 40, got {height}")
            print(f"✅ SVG dimensions: {width}x{height}")
            
            # Check if the SVG contains the AX logo elements
            self.assertTrue('Letter A' in svg_content, "SVG should contain the Letter A component")
            self.assertTrue('Letter X with interlocking design' in svg_content, "SVG should contain the Letter X component")
            self.assertTrue('Interlocking connection' in svg_content, "SVG should contain the interlocking connection")
            print("✅ SVG contains all required AX logo elements")
            
            # Check cache control headers
            cache_control = response.headers.get('Cache-Control', '')
            self.assertTrue('public' in cache_control, "Cache-Control should include 'public'")
            self.assertTrue('max-age=' in cache_control, "Cache-Control should include 'max-age'")
            print(f"✅ Cache-Control headers: {cache_control}")
            
        except requests.RequestException as e:
            self.fail(f"Request failed: {str(e)}")
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")
            
    def test_logos_api(self):
        """Test the logos API endpoint"""
        print("\n🔍 Testing logos API...")
        
        try:
            response = requests.get(f"{self.base_url}/api/logos")
            
            # Check if the request was successful
            self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
            print("✅ Status code: 200")
            
            # Check if the response is JSON
            content_type = response.headers.get('Content-Type', '')
            self.assertTrue('application/json' in content_type, f"Expected Content-Type to include 'application/json', got '{content_type}'")
            print("✅ Content-Type: application/json")
            
            # Check if the response contains the logos array
            data = response.json()
            self.assertIn('logos', data, "Response should contain 'logos' key")
            print("✅ Response contains 'logos' key")
            
            # Check if logos is an array
            self.assertIsInstance(data['logos'], list, "logos should be an array")
            print(f"✅ logos is an array with {len(data['logos'])} items")
            
            # Print the logos found
            print(f"📋 Logos found: {', '.join(data['logos'])}")
            
        except requests.RequestException as e:
            self.fail(f"Request failed: {str(e)}")
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")

def run_tests():
    # Create a test suite
    suite = unittest.TestSuite()
    suite.addTest(AdvisorXAPITests('test_logo_api'))
    suite.addTest(AdvisorXAPITests('test_logos_api'))
    
    # Run the tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Return appropriate exit code
    return 0 if result.wasSuccessful() else 1

if __name__ == "__main__":
    sys.exit(run_tests())
