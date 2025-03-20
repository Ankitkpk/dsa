function mergeSorted(nums1, nums2, m, n) {
    // Merge arrays in reverse order
    let p1 = m - 1;  // Pointer for nums1
    let p2 = n - 1;  // Pointer for nums2
    let p = m + n - 1;  // Points to the last index in nums1
    while(p1 >=0 && p2 >=0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] =nums1[p1];
            p1--;
        }else{
            nums1[p]=nums2[p2];
            p2--;
        }
        p--;
    }
    while(p2 >=0 ){
      nums1[p]=nums2[p2];
      p2--;
      p--;
    }
    console.log(nums1);  // Print the merged array
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;
mergeSorted(nums1, nums2, m, n);  // Output: [1, 2, 2, 3, 5, 6]
