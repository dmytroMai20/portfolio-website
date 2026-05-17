import { test, expect } from '@playwright/test'

test.describe('Portfolio smoke tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
  })

  test('page has correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Dmytro Mai/)
  })

  test('header is visible with personal info', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header')
    await expect(header).toBeVisible()
  })

  test('about section renders', async ({ page }) => {
    await page.goto('/')
    const about = page.locator('#about')
    await expect(about).toBeVisible()
  })

  test('CV section renders with experience', async ({ page }) => {
    await page.goto('/')
    const cv = page.locator('#cv')
    await expect(cv).toBeVisible()
  })

  test('projects section renders', async ({ page }) => {
    await page.goto('/')
    const projects = page.locator('#projects')
    await expect(projects).toBeVisible()
  })

  test('contact section renders', async ({ page }) => {
    await page.goto('/')
    const contact = page.locator('#contact')
    await expect(contact).toBeVisible()
  })

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')

    const toggle = page.locator('button[aria-label*="Switch to"]')
    await expect(toggle).toBeVisible()

    await toggle.click()
    await expect(html).toHaveClass(/dark/)

    await toggle.click()
    await expect(html).not.toHaveClass(/dark/)
  })

  test('navigation links point to sections', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav')
    const links = nav.locator('a[href^="#"]')
    expect(await links.count()).toBeGreaterThan(0)
  })

  test('contact form is interactive', async ({ page }) => {
    await page.goto('/')
    const form = page.locator('#contact form')
    await expect(form).toBeVisible()

    await form.locator('input[name="name"]').fill('Test User')
    await form.locator('input[name="email"]').fill('test@example.com')
    await form.locator('textarea[name="message"]').fill('Hello!')

    const submitButton = form.locator('button[type="submit"]')
    await expect(submitButton).toBeEnabled()
  })

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    expect(errors).toHaveLength(0)
  })
})
