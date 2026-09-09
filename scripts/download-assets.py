"""Download remaining Google Drive assets with rate-limit friendly delays."""
import os
import time
import requests

BASE = r"D:\GitHub\mind-on-business\drive-download"

DOWNLOADS = [
    # Product INFO
    ("17OPpz0wvjRYhfKT4NjoQ8t7IfrQe01QrRlRww9cYUJU", "Product Information/Product-INFO.xlsx"),
    # Sweatshirts - Bought (missing)
    ("1Tfgo60o0-BITm0J5IKM2dpO__OmMgJQQ", "02 – Sweatshirts & Hoodies/Bought/PHOTO-2026-04-02-14-52-32.jpg"),
    # Legitimately suited
    ("1haT2v75jbhUbIu8O64GHnRbeZU0QCqtA", "02 – Sweatshirts & Hoodies/Legitimately suited/PHOTO-2025-01-18-09-46-29.jpg"),
    ("1OMZ7VbBYomxEQ3QLUISStcZlFyO4j_4X", "02 – Sweatshirts & Hoodies/Legitimately suited/PHOTO-2025-01-18-09-46-31 2.jpg"),
    ("146AEn3syEoxwwAMgNZOrChedLm-AsvkX", "02 – Sweatshirts & Hoodies/Legitimately suited/PHOTO-2025-01-18-09-46-32 2.jpg"),
    ("1cy2odciLwlOhTtdR3ZGG2AhXnn7MIX99", "02 – Sweatshirts & Hoodies/Legitimately suited/PHOTO-2025-01-18-09-46-33 3.jpg"),
    # Long term believer
    ("1vOvlRFVgGn4_sHRH7tp6GJx4TqdjqDGo", "02 – Sweatshirts & Hoodies/Long term believer/PHOTO-2026-04-02-14-52-29 2.jpg"),
    ("18SlAMmGIMU0nVZoAg8ux7iZD1fhDBhsN", "02 – Sweatshirts & Hoodies/Long term believer/PHOTO-2026-04-02-14-52-30 4.jpg"),
    ("1ZIk3k5d1wumaC2YF8vTnBztVh2SOcB2B", "02 – Sweatshirts & Hoodies/Long term believer/PHOTO-2026-04-02-14-52-31 2.jpg"),
    # On it
    ("1WEeebeSzgA0xQ-DzcnVYXlISeNORtt5X", "02 – Sweatshirts & Hoodies/On it/PHOTO-2025-01-18-09-46-36 3.jpg"),
    ("10n6Jrk8eWGtr3h_AFCQyQR14SFF3L1fH", "02 – Sweatshirts & Hoodies/On it/PHOTO-2025-01-18-09-46-37.jpg"),
    ("1oPUJzfNu9Xtp6rQLDxmGaLYG7FqC60mr", "02 – Sweatshirts & Hoodies/On it/PHOTO-2025-01-18-09-46-38 3.jpg"),
    ("1Jp-UVfdFLVDI7fRIJNj20fKm_rLFD9qc", "02 – Sweatshirts & Hoodies/On it/PHOTO-2025-01-18-09-46-38.jpg"),
    ("1y0GXsREQ2QLJPrSB8Lapx_gtF8QeRjLD", "02 – Sweatshirts & Hoodies/On it/PHOTO-2025-01-18-09-46-39 2.jpg"),
    # Plugged in
    ("1IQoB15P_PbrhBC6dwSNF0pmxG-O0AYbU", "02 – Sweatshirts & Hoodies/Plugged in/PHOTO-2026-04-02-14-52-25.jpg"),
    ("1HJNiNxf-tKvJz4nEixrHvrD3M288io6N", "02 – Sweatshirts & Hoodies/Plugged in/PHOTO-2026-04-02-14-52-27 2.jpg"),
    # Suit up
    ("1Cwl4CQuOBt69yLNvaa8GNDeZkLEB_8Zu", "02 – Sweatshirts & Hoodies/Suit up/PHOTO-2025-11-17-09-16-53 2.jpg"),
    ("1rDdHys_7yuaTNY08KCVmGCPITcTJLfnx", "02 – Sweatshirts & Hoodies/Suit up/PHOTO-2025-11-17-09-17-05 2.jpg"),
    ("1l1S7laMtDhZVlYbhy9KGYoNuagwjXzkL", "02 – Sweatshirts & Hoodies/Suit up/PHOTO-2025-11-17-09-17-11 2.jpg"),
    ("1BhslVsm596dd6G-vmYxFRhMJQa2R-q22", "02 – Sweatshirts & Hoodies/Suit up/PHOTO-2025-11-17-09-17-12 2.jpg"),
    ("1slt1BliNqMn4Ml_va_V12gl7tPH-iINH", "02 – Sweatshirts & Hoodies/Suit up/PHOTO-2025-11-17-09-17-14.jpg"),
    # The piece
    ("1nuO_soBpQFItB85YjWgXQimWGxv4OIAf", "02 – Sweatshirts & Hoodies/The piece/PHOTO-2024-12-11-12-06-40.jpg"),
    ("1RlCQ1rGQq2GTxP0wEYkieUJEy2ur_0wb", "02 – Sweatshirts & Hoodies/The piece/PHOTO-2024-12-11-12-06-41 2.jpg"),
    ("1-VDnZHoyvrNdVdWvCGVn1osI39Rvv9mX", "02 – Sweatshirts & Hoodies/The piece/PHOTO-2024-12-11-12-06-41.jpg"),
    ("1u8ped91FXEN4Kwnga6t9DfL1R2x2a9F9", "02 – Sweatshirts & Hoodies/The piece/PHOTO-2024-12-13-09-33-12.jpg"),
    ("1pyy8PKsAd7cy-BOdgct8UTFjTyos2XC5", "02 – Sweatshirts & Hoodies/The piece/PHOTO-2024-12-13-09-33-19.jpg"),
    # True to it
    ("1WHflQzuB2UVU8i_5SkYsYHMobdWvXl7T", "02 – Sweatshirts & Hoodies/True to it/PHOTO-2025-10-03-12-16-58.jpg"),
    # Jackets - Bomb squad variants
    ("1xdfejkl9eaa2vylZxY3xSN4i4ODQw1DE", "03 – Jackets/Bomb squad/Brewer blue.jpg"),
    ("1nP9lhTqejZqBZoG-nDsBsWmyatEhP_rN", "03 – Jackets/Bomb squad/Concrete.jpg"),
    ("1lJm2OC3NmzmO2r7fobexbUNJkZ8oktFJ", "03 – Jackets/Bomb squad/Gentleman.jpg"),
    ("1LKjFOSSu7FLd2Sd5dEWi85iao5MckbJQ", "03 – Jackets/Bomb squad/Gods love.jpg"),
    ("1u4lrol6Z6YeEQm0FUPxCc3eAZEC5JOsF", "03 – Jackets/Bomb squad/Holy Spirit.jpg"),
    ("1BVxkuWnhvAsh8kjv1CmYxcyoj7TEkxRO", "03 – Jackets/Bomb squad/Long walk.jpg"),
    ("1REpnoa5sryjDcv27JJIui0fS37P5T18c", "03 – Jackets/Bomb squad/Royalty.jpg"),
    ("1wNBzFLW6JDwceBcpKVn_D9zFKZmRzwJI", "03 – Jackets/Bomb squad/Sand storm.jpg"),
    ("18Mm5g5wYDjE_nceUA6TbxN9jhtbCwghj", "03 – Jackets/Bomb squad/True blue.jpg"),
]


def download_file(file_id: str, output_path: str) -> tuple[bool, str]:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    if os.path.exists(output_path) and os.path.getsize(output_path) > 1000:
        return True, "exists"

    session = requests.Session()
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    response = session.get(url, stream=True, timeout=60)

    for key, value in response.cookies.items():
        if key.startswith("download_warning"):
            url = f"https://drive.google.com/uc?export=download&confirm={value}&id={file_id}"
            response = session.get(url, stream=True, timeout=60)
            break

    if response.status_code != 200:
        return False, f"status {response.status_code}"

    content = response.content
    if len(content) < 500:
        return False, f"small {len(content)}: {content[:200]}"

    with open(output_path, "wb") as f:
        f.write(content)
    return True, str(len(content))


if __name__ == "__main__":
    ok_count = 0
    fail_count = 0
    for file_id, rel_path in DOWNLOADS:
        out = os.path.join(BASE, rel_path)
        ok, msg = download_file(file_id, out)
        status = "OK" if ok else "FAIL"
        print(f"[{status}] {rel_path}: {msg}")
        if ok:
            ok_count += 1
        else:
            fail_count += 1
        time.sleep(8)
    print(f"\nDone: {ok_count} ok, {fail_count} failed")
